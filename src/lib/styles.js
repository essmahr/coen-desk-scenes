import { rhythm } from './typography';

export const gutter = (mult = 1) => rhythm(mult * 1);

export const BREAKPOINTS = [600, 1200];

export const mqs = BREAKPOINTS.reduce(
  (queries, breakpoint, index, breakpoints) => {
    if (index === 0) {
      queries.push(`@media (max-width: ${breakpoint - 1}px)`);
    }

    const rule = [`@media (min-width: ${breakpoint}px)`];

    if (index !== breakpoints.length - 1) {
      rule.push(`(max-width: ${breakpoints[index + 1] - 1}px)`);
    }

    queries.push(rule.join(' and '));

    return queries;
  },
  []
);
