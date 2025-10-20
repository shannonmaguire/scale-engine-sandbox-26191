/**
 * Client-side form rate limiting
 * Prevents spam and abuse while maintaining good UX
 */

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
  blockDurationMs?: number;
}

interface RateLimitState {
  attempts: number;
  firstAttempt: number;
  blockedUntil?: number;
}

const DEFAULT_CONFIG: RateLimitConfig = {
  maxAttempts: 5,
  windowMs: 60000, // 1 minute
  blockDurationMs: 300000, // 5 minutes
};

class FormRateLimiter {
  private state: Map<string, RateLimitState>;
  private storageKey = 'form-rate-limits';

  constructor() {
    this.state = new Map();
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const data = JSON.parse(stored);
        this.state = new Map(Object.entries(data));
      }
    } catch (error) {
      console.error('Failed to load rate limit state:', error);
    }
  }

  private saveToStorage() {
    try {
      const data = Object.fromEntries(this.state.entries());
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save rate limit state:', error);
    }
  }

  /**
   * Check if form submission is allowed
   */
  checkLimit(formId: string, config: Partial<RateLimitConfig> = {}): {
    allowed: boolean;
    remainingAttempts: number;
    resetIn?: number;
    blockedFor?: number;
  } {
    const now = Date.now();
    const finalConfig = { ...DEFAULT_CONFIG, ...config };
    const state = this.state.get(formId);

    // No previous attempts
    if (!state) {
      return {
        allowed: true,
        remainingAttempts: finalConfig.maxAttempts - 1,
      };
    }

    // Check if blocked
    if (state.blockedUntil && now < state.blockedUntil) {
      return {
        allowed: false,
        remainingAttempts: 0,
        blockedFor: Math.ceil((state.blockedUntil - now) / 1000),
      };
    }

    // Check if window has expired
    const windowExpired = now - state.firstAttempt > finalConfig.windowMs;
    if (windowExpired) {
      // Reset window
      this.state.delete(formId);
      this.saveToStorage();
      return {
        allowed: true,
        remainingAttempts: finalConfig.maxAttempts - 1,
      };
    }

    // Check if limit exceeded
    if (state.attempts >= finalConfig.maxAttempts) {
      // Block user
      const blockedUntil = now + (finalConfig.blockDurationMs || 0);
      this.state.set(formId, {
        ...state,
        blockedUntil,
      });
      this.saveToStorage();

      return {
        allowed: false,
        remainingAttempts: 0,
        blockedFor: Math.ceil((blockedUntil - now) / 1000),
      };
    }

    // Still within limits
    const remainingAttempts = finalConfig.maxAttempts - state.attempts;
    const resetIn = Math.ceil((state.firstAttempt + finalConfig.windowMs - now) / 1000);

    return {
      allowed: true,
      remainingAttempts,
      resetIn,
    };
  }

  /**
   * Record a form submission attempt
   */
  recordAttempt(formId: string): void {
    const now = Date.now();
    const state = this.state.get(formId);

    if (!state) {
      this.state.set(formId, {
        attempts: 1,
        firstAttempt: now,
      });
    } else {
      this.state.set(formId, {
        ...state,
        attempts: state.attempts + 1,
      });
    }

    this.saveToStorage();
  }

  /**
   * Clear rate limit for a specific form
   */
  clearLimit(formId: string): void {
    this.state.delete(formId);
    this.saveToStorage();
  }

  /**
   * Clear all rate limits
   */
  clearAll(): void {
    this.state.clear();
    localStorage.removeItem(this.storageKey);
  }

  /**
   * Get remaining time until reset
   */
  getResetTime(formId: string, windowMs: number = DEFAULT_CONFIG.windowMs): number | null {
    const state = this.state.get(formId);
    if (!state) return null;

    const now = Date.now();
    const resetAt = state.firstAttempt + windowMs;
    
    if (now >= resetAt) return null;
    
    return Math.ceil((resetAt - now) / 1000);
  }
}

// Export singleton instance
export const formRateLimiter = new FormRateLimiter();

/**
 * React hook for form rate limiting
 */
export const useFormRateLimit = (
  formId: string,
  config?: Partial<RateLimitConfig>
) => {
  const checkLimit = () => formRateLimiter.checkLimit(formId, config);
  const recordAttempt = () => formRateLimiter.recordAttempt(formId);
  const clearLimit = () => formRateLimiter.clearLimit(formId);

  return {
    checkLimit,
    recordAttempt,
    clearLimit,
  };
};

export default formRateLimiter;
