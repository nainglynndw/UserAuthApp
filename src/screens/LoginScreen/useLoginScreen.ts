import { useState } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { validateLoginForm } from '../../utils/validation';

export const useLoginScreen = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setErrors(prev => ({ ...prev, email: '' }));
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setErrors(prev => ({ ...prev, password: '' }));
  };

  const handleLogin = async () => {
    const validation = validateLoginForm(email, password);
    
    if (!validation.isValid) {
      setErrors({
        email: validation.errors.email || '',
        password: validation.errors.password || '',
      });
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert('Login Failed', (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    loading,
    errors,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  };
};
