/**
 * Security utilities for input validation and sanitization
 * Protects against path traversal, XSS, and other attacks
 */

/**
 * Sanitize slug to prevent path traversal attacks
 * Only allows alphanumeric characters, hyphens, and underscores
 */
export function sanitizeSlug(slug: string): string {
    if (!slug || typeof slug !== 'string') {
      return '';
    }
    
    // Remove any path traversal attempts and dangerous characters
    const cleaned = slug
      .replace(/\.\./g, '')     // Remove .. (parent directory)
      .replace(/\//g, '')       // Remove forward slashes
      .replace(/\\/g, '')       // Remove backslashes
      .replace(/\0/g, '')       // Remove null bytes
      .replace(/[^a-z0-9-_]/gi, ''); // Only allow safe characters
    
    // Limit length to prevent DoS
    return cleaned.slice(0, 100);
  }
  
  /**
   * Sanitize search query to prevent XSS and ReDoS attacks
   */
  export function sanitizeSearchQuery(query: string): string {
    if (!query || typeof query !== 'string') {
      return '';
    }
    
    // Remove dangerous characters and limit length
    return query
      .trim()
      .slice(0, 100)                    // Prevent DoS with long strings
      .replace(/[<>'"]/g, '')           // Remove XSS characters
      .replace(/[^\w\s-]/g, '');        // Only allow word characters, spaces, and hyphens
  }
  
  /**
   * Validate email format
   */
  export function isValidEmail(email: string): boolean {
    if (!email || typeof email !== 'string') {
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  }
  
  /**
   * Rate limiting helper (simple in-memory implementation)
   */
  const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
  
  export function checkRateLimit(
    identifier: string,
    maxRequests: number = 100,
    windowMs: number = 15 * 60 * 1000 // 15 minutes default
  ): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const record = rateLimitMap.get(identifier);
  
    // No record or expired record - create new
    if (!record || now > record.resetTime) {
      const resetTime = now + windowMs;
      rateLimitMap.set(identifier, {
        count: 1,
        resetTime,
      });
      return { 
        allowed: true, 
        remaining: maxRequests - 1,
        resetTime 
      };
    }
  
    // Exceeded rate limit
    if (record.count >= maxRequests) {
      return { 
        allowed: false, 
        remaining: 0,
        resetTime: record.resetTime 
      };
    }
  
    // Increment counter
    record.count++;
    return { 
      allowed: true, 
      remaining: maxRequests - record.count,
      resetTime: record.resetTime 
    };
  }
  
  /**
   * Clean up old rate limit entries to prevent memory leaks
   */
  export function cleanupRateLimitMap(): void {
    const now = Date.now();
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }
  
  // Cleanup old entries every hour (only on server)
  if (typeof window === 'undefined') {
    setInterval(cleanupRateLimitMap, 60 * 60 * 1000);
  }
  
  /**
   * Escape HTML to prevent XSS
   */
  export function escapeHtml(text: string): string {
    if (!text || typeof text !== 'string') {
      return '';
    }
    
    const htmlEscapes: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;',
    };
    
    return text.replace(/[&<>"'/]/g, (char) => htmlEscapes[char]);
  }