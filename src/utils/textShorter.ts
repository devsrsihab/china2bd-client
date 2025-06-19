export function textShorter(text: string, limit: number): string {
  // Remove HTML tags
  const plainText = text.replace(/<\/?[^>]+(>|$)/g, "");

  if (plainText.length <= limit) {
    return plainText;
  }

  // Truncate the text and add ellipsis
  return plainText.slice(0, limit) + "...";
}
