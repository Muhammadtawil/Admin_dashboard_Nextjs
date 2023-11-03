export default function truncateText(text: string, words: number) {
  const wordArray = text.split(" ");
  if (wordArray.length <= words) {
    return text;
  }
  const truncatedText = wordArray.slice(0, words).join(" ");
  return `${truncatedText}...`;
}
