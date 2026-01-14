import { useState } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { validateSignupForm } from '../../utils/validation';

export const useSignupScreen = () => {
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const handleNameChange = (text: string) => {
    setName(text);
    setErrors(prev => ({ ...prev, name: '' }));
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setErrors(prev => ({ ...prev, email: '' }));
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setErrors(prev => ({ ...prev, password: '' }));
  };

  const handleSignup = async () => {
    const validation = validateSignupForm(name, email, password);
    
    if (!validation.isValid) {
      setErrors({
        name: validation.errors.name || '',
        email: validation.errors.email || '',
        password: validation.errors.password || '',
      });
      return;
    }

    setLoading(true);
    try {
      await signup(name, email, password);
    } catch (error) {
      Alert.alert('Signup Failed', (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    email,
    password,
    loading,
    errors,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSignup,
  };
};
