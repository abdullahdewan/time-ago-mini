import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import timeAgo from '../src/index';

describe('timeAgo', () => {
  beforeEach(() => {
    // Mock the system time to a fixed point for consistent testing
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2023-10-10T12:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return "just now" for times under a minute', () => {
    const now = Date.now();
    expect(timeAgo(now)).toBe('just now');
    expect(timeAgo(now - 30 * 1000)).toBe('just now'); // 30 seconds ago
    expect(timeAgo(now - 59 * 1000)).toBe('just now'); // 59 seconds ago
  });

  it('should format minutes correctly', () => {
    const now = Date.now();
    expect(timeAgo(now - 60 * 1000)).toBe('1 minute ago');
    expect(timeAgo(now - 5 * 60 * 1000)).toBe('5 minutes ago');
  });

  it('should format hours correctly', () => {
    const now = Date.now();
    expect(timeAgo(now - 60 * 60 * 1000)).toBe('1 hour ago');
    expect(timeAgo(now - 3 * 60 * 60 * 1000)).toBe('3 hours ago');
  });

  it('should format days correctly', () => {
    const now = Date.now();
    expect(timeAgo(now - 24 * 60 * 60 * 1000)).toBe('1 day ago');
    expect(timeAgo(now - 10 * 24 * 60 * 60 * 1000)).toBe('10 days ago');
  });

  it('should format months correctly', () => {
    const now = Date.now();
    expect(timeAgo(now - 30 * 24 * 60 * 60 * 1000)).toBe('1 month ago');
    expect(timeAgo(now - 3 * 30 * 24 * 60 * 60 * 1000)).toBe('3 months ago');
  });

  it('should format years correctly', () => {
    const now = Date.now();
    expect(timeAgo(now - 365 * 24 * 60 * 60 * 1000)).toBe('1 year ago');
    expect(timeAgo(now - 5 * 365 * 24 * 60 * 60 * 1000)).toBe('5 years ago');
  });

  it('should accept strings', () => {
    // 1 hour before the mocked system time
    expect(timeAgo('2023-10-10T11:00:00Z')).toBe('1 hour ago');
  });

  it('should accept Date objects', () => {
    // 1 day before the mocked system time
    expect(timeAgo(new Date('2023-10-09T12:00:00Z'))).toBe('1 day ago');
  });

  it('should throw an error for invalid dates', () => {
    expect(() => timeAgo('invalid-date')).toThrow('Invalid date provided to time-ago-mini');
  });
});
