/**
 * Formats a date into a human-readable relative time string.
 *
 * @param date - The date to format (Date object, timestamp, or string).
 * @returns A relative time string (e.g., "just now", "5 minutes ago").
 */
export default function timeAgo(date: Date | number | string): string {
  const parsedDate = new Date(date);
  
  // Check for invalid date
  if (isNaN(parsedDate.getTime())) {
    throw new Error('Invalid date provided to time-ago-mini');
  }

  const now = Date.now();
  const diffInSeconds = Math.floor((now - parsedDate.getTime()) / 1000);

  // If it's in the future or very close to now (less than 1 minute)
  if (diffInSeconds < 60) {
    return 'just now';
  }

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 }
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}
