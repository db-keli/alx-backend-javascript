export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const res = Array.from(set)
    .filter((word) => typeof word === 'string' && word.startsWith(startString))
    .map((word) => word.slice(startString.length));
  return res.join('-');
}
