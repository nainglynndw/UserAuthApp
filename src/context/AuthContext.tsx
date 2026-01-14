import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';
import { saveUserSession, loadUserSession, clearUserSession } from '../utils/storage';
import { verifyCredentials, createUser } from '../utils/auth';
import { validateLoginForm, validateSignupForm } from '../utils/validation';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    const savedUser = await loadUserSession();
    if (savedUser) {
      setUser(savedUser);
    }
    setIsLoading(false);
  };

  const login = async (email: string, password: string): Promise<void> => {
    const validation = validateLoginForm(email, password);
    if (!validation.isValid) {
      const firstError = validation.errors.email || validation.errors.password;
      throw new Error(firstError);
    }

    const result = verifyCredentials(email, password);
    if (!result.success || !result.user) {
      throw new Error(result.error || 'Login failed');
    }

    await saveUserSession(result.user);
    setUser(result.user);
  };

  const signup = async (name: string, email: string, password: string): Promise<void> => {
    const validation = validateSignupForm(name, email, password);
    if (!validation.isValid) {
      const firstError = 
        validation.errors.name || 
        validation.errors.email || 
        validation.errors.password;
      throw new Error(firstError);
    }

    const result = createUser(name, email, password);
    if (!result.success || !result.user) {
      throw new Error(result.error || 'Signup failed');
    }

    await saveUserSession(result.user);
    setUser(result.user);
  };

  const logout = async (): Promise<void> => {
    await clearUserSession();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
