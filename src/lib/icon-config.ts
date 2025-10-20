/**
 * CWT Studio Icon Sizing System
 * Standardized sizes for consistent visual hierarchy
 */

export const ICON_SIZES = {
  micro: 14,      // Inline text icons, badges
  small: 16,      // Body text inline, list items
  medium: 20,     // Card headers, feature lists
  large: 24,      // Hero sections, page headers
  xl: 32,         // Marketing hero elements
} as const;

export const ICON_STROKE = {
  thin: 1.5,      // Subtle, background elements
  default: 2,     // Standard UI icons
  bold: 2.5,      // Emphasis, CTAs
} as const;

export type IconSize = keyof typeof ICON_SIZES;
export type IconStroke = keyof typeof ICON_STROKE;

/**
 * Usage example:
 * 
 * import { ICON_SIZES, ICON_STROKE } from '@/lib/icon-config';
 * import { CheckCircle } from 'lucide-react';
 * 
 * <CheckCircle size={ICON_SIZES.medium} strokeWidth={ICON_STROKE.default} />
 */
