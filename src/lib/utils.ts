/**
 * Formats a slug-like string (e.g., 'web-development') into a title-cased string 
 * (e.g., 'Web Development').
 * @param slug The input string to format.
 * @returns The formatted, title-cased string.
 */
export function formatCategory(slug: string): string {
  if (!slug) return '';
  
  const words = slug.replaceAll('26', ' & ').split('-');
  const capitalizedWords = words.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  );
  
  return capitalizedWords.join(' ');
}