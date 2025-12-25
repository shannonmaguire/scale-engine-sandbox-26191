/**
 * Shared validation utilities for API endpoints
 * Provides consistent input validation to prevent abuse
 */

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Field length limits
const LENGTH_LIMITS = {
  email: 254,
  name: 200,
  company: 200,
  message: 5000,
  text: 2000,
  shortText: 500,
};

/**
 * Validate email format
 */
export const validateEmail = (email) => {
  if (typeof email !== 'string') return false;
  const trimmed = email.trim();
  return trimmed.length > 0 && trimmed.length <= LENGTH_LIMITS.email && EMAIL_REGEX.test(trimmed);
};

/**
 * Validate string length
 */
export const validateLength = (value, maxLength) => {
  if (value === null || value === undefined) return true;
  return String(value).length <= maxLength;
};

/**
 * Validate required fields exist and are non-empty strings
 */
export const validateRequired = (payload, fields) => {
  const missing = [];
  for (const field of fields) {
    const value = payload[field];
    if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {
      missing.push(field);
    }
  }
  return missing;
};

/**
 * Validate payload size (prevent DoS via large payloads)
 * Max 50KB for form submissions
 */
export const validatePayloadSize = (payload, maxBytes = 50000) => {
  try {
    const size = JSON.stringify(payload).length;
    return size <= maxBytes;
  } catch {
    return false;
  }
};

/**
 * Sanitize and validate all text fields in payload
 * Returns { valid: boolean, errors: string[] }
 */
export const validateTextFields = (payload, fieldLimits) => {
  const errors = [];
  
  for (const [field, limit] of Object.entries(fieldLimits)) {
    if (payload[field] !== undefined && payload[field] !== null) {
      const value = String(payload[field]);
      if (value.length > limit) {
        errors.push(`${field} exceeds maximum length of ${limit} characters`);
      }
    }
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
};

/**
 * HTML escape function
 */
export const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/**
 * Simple in-memory rate limiting state
 * Note: This resets on cold starts, but provides basic protection
 */
const rateLimitState = new Map();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // 10 requests per minute per IP

/**
 * Check rate limit for an identifier (usually IP address)
 * Returns { allowed: boolean, retryAfter?: number }
 */
export const checkRateLimit = (identifier) => {
  const now = Date.now();
  const state = rateLimitState.get(identifier);
  
  // Clean up old entries periodically
  if (rateLimitState.size > 1000) {
    for (const [key, value] of rateLimitState.entries()) {
      if (now - value.windowStart > RATE_LIMIT_WINDOW_MS) {
        rateLimitState.delete(key);
      }
    }
  }
  
  if (!state || now - state.windowStart > RATE_LIMIT_WINDOW_MS) {
    // New window
    rateLimitState.set(identifier, { count: 1, windowStart: now });
    return { allowed: true };
  }
  
  if (state.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfter = Math.ceil((state.windowStart + RATE_LIMIT_WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfter };
  }
  
  // Increment count
  state.count++;
  return { allowed: true };
};

/**
 * Get client IP from request
 */
export const getClientIP = (req) => {
  return (
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown'
  );
};

export const LENGTH_LIMITS_EXPORT = LENGTH_LIMITS;
