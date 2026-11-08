const STORE_KEY = 'evitale-layer';

export function saveLayer(value: string) {
  try {
    localStorage.setItem(STORE_KEY, value);
  } catch {
    /* privatus langas ar išjungta saugykla */
  }
}

export function loadLayer(): string | null {
  try {
    return localStorage.getItem(STORE_KEY);
  } catch {
    return null;
  }
}

export function layerFromUrl(): string | null {
  return new URLSearchParams(window.location.search).get('layer');
}

/** Prideda (arba nuima) ?layer= prie nuorodos. */
export function withLayer(href: string, value: string | null) {
  const url = new URL(href, window.location.href);
  if (!value || value === 'all') url.searchParams.delete('layer');
  else url.searchParams.set('layer', value);
  return url.pathname + url.search + url.hash;
}

/** Atnaujina dabartinio puslapio adresą ir visas nuorodas su data-keep-layer. */
export function syncLayerEverywhere(value: string | null) {
  window.history.replaceState(null, '', withLayer(window.location.href, value));
  document.querySelectorAll<HTMLAnchorElement>('a[data-keep-layer]').forEach((a) => {
    const base = a.dataset.baseHref ?? a.getAttribute('href') ?? '/';
    a.dataset.baseHref = base;
    a.setAttribute('href', withLayer(base, value));
  });
}

export function initPicker(root: HTMLElement, onChange: (value: string) => void) {
  const button = root.querySelector<HTMLButtonElement>('.picker-btn')!;
  const list = root.querySelector<HTMLElement>('.picker-list')!;
  const options = Array.from(root.querySelectorAll<HTMLButtonElement>('.picker-opt'));
  const valueLabel = root.querySelector<HTMLElement>('.picker-value')!;
  const valueDot = root.querySelector<HTMLElement>('.picker-btn .dot')!;

  const isOpen = () => !list.hidden;
  const setOpen = (open: boolean) => {
    list.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    if (open) {
      const selected = options.find((o) => o.getAttribute('aria-selected') === 'true') ?? options[0];
      selected.focus();
    }
  };

  const set = (value: string) => {
    let found = false;
    options.forEach((o) => {
      const on = o.dataset.value === value;
      o.setAttribute('aria-selected', String(on));
      if (on) {
        found = true;
        valueLabel.textContent = o.dataset.label ?? '';
        valueDot.className = `dot l-${value}`;
      }
    });
    return found;
  };

  button.addEventListener('click', () => setOpen(!isOpen()));

  options.forEach((o) =>
    o.addEventListener('click', () => {
      const value = o.dataset.value!;
      set(value);
      setOpen(false);
      button.focus();
      onChange(value);
    }),
  );

  document.addEventListener('click', (e) => {
    if (isOpen() && !root.contains(e.target as Node)) setOpen(false);
  });

  root.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) {
      setOpen(false);
      button.focus();
      return;
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen()) return setOpen(true);
      const i = options.indexOf(document.activeElement as HTMLButtonElement);
      const next = e.key === 'ArrowDown' ? Math.min(i + 1, options.length - 1) : Math.max(i - 1, 0);
      options[next].focus();
    }
  });

  return { set, values: options.map((o) => o.dataset.value!) };
}
