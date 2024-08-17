/**
 * @param {string} markdown
 * @returns {string}
 */
export function parse(markdown) {
  // Bold
  markdown = markdown.replace(/__(.*)__/g, '<strong>$1</strong>');

  // Italics
  markdown = markdown.replace(/_(.*)_/g, '<em>$1</em>');

  // Headers
  markdown = markdown.replace(/^(#{1,6}) (.*)/gm, (_, g1, g2) => `<h${g1.length}>${g2}</h${g1.length}>`);

  // List items
  markdown = markdown.replace(/^\* (.*)/gm, '<li>$1</li>');

  // Unordered lists
  markdown = markdown.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');

  // Paragraphs
  return markdown.replace(/^(?!<h[1-6]>|<li>|<ul>)(.*)/gm, '<p>$1</p>').replaceAll('\n', '');
}
