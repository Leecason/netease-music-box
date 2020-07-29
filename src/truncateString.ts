export default function truncateString (str: string, num: number, suf: boolean): string {
  let suffix = '';
  if (suf) {
    suffix = '...';
  }
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + suffix;
}
