function visit(node) {
  if (node.type === 'element' && node.tagName === 'a' && typeof node.properties?.href === 'string') {
    const href = node.properties.href;
    if (!href.startsWith('http:') && !href.startsWith('https:') && !href.startsWith('mailto:')) {
      node.properties.href = href.replace(/\.md(?=($|#|\?))/, '/');
    }
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) visit(child);
  }
}

export function rehypeOkfLinks() {
  return (tree) => visit(tree);
}
