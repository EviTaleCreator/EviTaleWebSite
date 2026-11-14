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
export function syncLayerEverywhere(value: string | null, updateUrl = true) {
  if (updateUrl) window.history.replaceState(null, '', withLayer(window.location.href, value));
  document.querySelectorAll<HTMLAnchorElement>('a[data-keep-layer]').forEach((a) => {
    const base = a.dataset.baseHref ?? a.getAttribute('href') ?? '/';
    a.dataset.baseHref = base;
    a.setAttribute('href', withLayer(base, value));
  });
}

/** Mygtukų grupė (Mažyliams · Vaikams · Vyresniems): pažymi pasirinktą ir praneša apie pakeitimą. */
export function initSeg(root: HTMLElement, onChange: (value: string) => void) {
  const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('button[data-value]'));
  const values = buttons.map((b) => b.dataset.value!);

  const set = (value: string) => {
    if (!values.includes(value)) return false;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.value === value)));
    return true;
  };

  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      const value = b.dataset.value!;
      set(value);
      onChange(value);
    }),
  );

  return { set, values };
}
