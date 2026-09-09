import { PageRoute } from '../types';

export interface BrandThemeConfig {
  id: string;
  name: string;
  primary: string;
  hover: string;
  lightBg: string;
  borderColor: string;
  gradientFrom: string;
  gradientTo: string;
  badgeBg: string;
  bannerBg: string;
  buttonBg: string;
  phoneTextColor: string;
}

export const DEFAULT_THEME: BrandThemeConfig = {
  id: 'default',
  name: 'ro-service centre',
  primary: '#0c54a0',
  hover: '#09417d',
  lightBg: '#EFF6FF',
  borderColor: '#BFDBFE',
  gradientFrom: '#0c54a0',
  gradientTo: '#0284c7',
  badgeBg: '#0c54a0',
  bannerBg: '#0c54a0',
  buttonBg: '#0c54a0',
  phoneTextColor: '#0c54a0',
};

export function getBrandTheme(currentRoute?: string, lastBrandRoute?: string | null): BrandThemeConfig {
  return DEFAULT_THEME;
}
