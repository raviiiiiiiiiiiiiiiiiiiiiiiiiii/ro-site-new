import { PageRoute } from '../types';

/**
 * All routes now resolve to root since brand pages have been consolidated.
 */
export function getRouteFromSubdomain(hostname?: string): PageRoute | null {
  return null;
}
