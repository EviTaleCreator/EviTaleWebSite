// Viską, kas pasakos faile yra po antrašte „## Pokalbiui“, suskleidžia į <details> kortelę.
const text = (node) =>
  node.type === 'text' ? node.value : (node.children ?? []).map(text).join('');

const el = (tagName, properties, children) => ({ type: 'element', tagName, properties, children });
const t = (value) => ({ type: 'text', value });

export default function rehypePokalbiui() {
  return (tree) => {
    const kids = tree.children;
    const i = kids.findIndex((n) => n.type === 'element' && n.tagName === 'h2' && text(n).trim() === 'Pokalbiui');
    if (i < 0) return;
    const rest = kids.slice(i + 1);
    const details = el('details', { className: ['talk'], id: 'pokalbiui' }, [
      el('summary', {}, [
        el('span', { className: ['talk-title'] }, [t('Pokalbiui')]),
        el('small', {}, [t('Apie ką ši pasaka, pastabos tėvams ir klausimai')]),
      ]),
      el('div', { className: ['talk-body'] }, rest),
    ]);
    tree.children = [...kids.slice(0, i), details];
  };
}
