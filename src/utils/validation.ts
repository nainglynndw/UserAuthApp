/**
 * Validation utilities
 * Pure functions for form validation - no side effects
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 6;

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates email format
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (!EMAIL_REGEX.test(email)) {
    return { isValid: false, error: 'Invalid email format' };
  }
  
  return { isValid: true };
};

/**
 * Validates password for login (just checks if exists)
 */
export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, error: 'Password is required' };
  }
  
  return { isValid: true };
};

/**
 * Validates password for signup (checks length)
 */
export const validatePasswordSignup = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, error: 'Password is required' };
  }
  
  if (password.length < MIN_PASSWORD_LENGTH) {
    return { 
      isValid: false, 
      error: `Password must be at least ${MIN_PASSWORD_LENGTH} characters` 
    };
  }
  
  return { isValid: true };
};

/**
 * Validates name field
 */
export const validateName = (name: string): ValidationResult => {
  if (!name || !name.trim()) {
    return { isValid: false, error: 'Name is required' };
  }
  
  return { isValid: true };
};

/**
 * Validates entire login form
 */
export const validateLoginForm = (email: string, password: string): {
  isValid: boolean;
  errors: { email?: string; password?: string };
} => {
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);
  
  return {
    isValid: emailValidation.isValid && passwordValidation.isValid,
    errors: {
      email: emailValidation.error,
      password: passwordValidation.error,
    },
  };
};

/**
 * Validates entire signup form
 */
export const validateSignupForm = (
  name: string,
  email: string,
  password: string
): {
  isValid: boolean;
  errors: { name?: string; email?: string; password?: string };
} => {
  const nameValidation = validateName(name);
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePasswordSignup(password);
  
  return {
    isValid: 
      nameValidation.isValid && 
      emailValidation.isValid && 
      passwordValidation.isValid,
    errors: {
      name: nameValidation.error,
      email: emailValidation.error,
      password: passwordValidation.error,
    },
  };
};
