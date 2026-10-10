# time-ago-mini

![npm bundle size](https://img.shields.io/bundlephobia/minzip/time-ago-mini)
![npm version](https://img.shields.io/npm/v/time-ago-mini.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A tiny, fast, dependency-free utility to format timestamps or `Date` objects into human-readable relative time strings (e.g., "5 minutes ago", "just now", "2 years ago").

Perfect for minimal builds where you don't want the overhead of large date libraries like `moment` or `date-fns`.

## Features

- **Zero dependencies**
- **Lightweight** (less than 1KB gzipped)
- **TypeScript ready** (types included)
- **Works in Node.js and the Browser**

## Installation

Using npm:

```bash
npm install time-ago-mini
```

Using yarn:

```bash
yarn add time-ago-mini
```

Using pnpm:

```bash
pnpm add time-ago-mini
```

## Usage

```typescript
import timeAgo from 'time-ago-mini';

// You can pass a Date object
const date = new Date(Date.now() - 5 * 60 * 1000);
console.log(timeAgo(date)); // "5 minutes ago"

// You can pass a timestamp (milliseconds)
console.log(timeAgo(Date.now() - 3600 * 1000)); // "1 hour ago"

// You can pass a valid ISO date string
console.log(timeAgo('2022-01-01T12:00:00Z')); // "X years ago"

// Anything under 1 minute returns "just now"
console.log(timeAgo(new Date())); // "just now"
```

## Outputs

- `just now` (0-59 seconds)
- `X minute(s) ago`
- `X hour(s) ago`
- `X day(s) ago`
- `X month(s) ago`
- `X year(s) ago`

## License

MIT License
