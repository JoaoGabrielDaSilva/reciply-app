export function normalizeString(string: string) {
  if (!string || typeof string !== 'string') return string;

  return string.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}
