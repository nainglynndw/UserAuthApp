import { User } from '../types';

const MOCK_USERS: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
];

const MOCK_PASSWORDS: Record<string, string> = {
  'john@example.com': 'password123',
};

export const verifyCredentials = (
  email: string,
  password: string
): { success: boolean; user?: User; error?: string } => {
  const user = MOCK_USERS.find(u => u.email === email);
  
  if (!user) {
    return { success: false, error: 'Invalid email or password' };
  }
  
  if (MOCK_PASSWORDS[email] !== password) {
    return { success: false, error: 'Invalid email or password' };
  }
  
  return { success: true, user };
};

export const checkEmailExists = (email: string): boolean => {
  return MOCK_USERS.some(u => u.email === email);
};

export const createUser = (
  name: string,
  email: string,
  password: string
): { success: boolean; user?: User; error?: string } => {
  if (checkEmailExists(email)) {
    return { success: false, error: 'User with this email already exists' };
  }
  
  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
  };
  
  MOCK_USERS.push(newUser);
  MOCK_PASSWORDS[email] = password;
  
  return { success: true, user: newUser };
};
