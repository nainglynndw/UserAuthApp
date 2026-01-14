/**
 * AsyncStorage wrapper utilities
 * Centralized storage operations with error handling
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types';

const STORAGE_KEYS = {
  USER_SESSION: '@user_session',
} as const;

/**
 * Saves user session to AsyncStorage
 */
export const saveUserSession = async (user: User): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem(STORAGE_KEYS.USER_SESSION, jsonValue);
  } catch (error) {
    console.error('Error saving user session:', error);
    throw new Error('Failed to save user session');
  }
};

/**
 * Loads user session from AsyncStorage
 */
export const loadUserSession = async (): Promise<User | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEYS.USER_SESSION);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error loading user session:', error);
    return null;
  }
};

/**
 * Removes user session from AsyncStorage
 */
export const clearUserSession = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.USER_SESSION);
  } catch (error) {
    console.error('Error clearing user session:', error);
    throw new Error('Failed to clear user session');
  }
};
