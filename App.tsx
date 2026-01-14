import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import { RootNavigator } from './src/navigation/navigators/RootNavigator';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <RootNavigator />
    </AuthProvider>
  );
}

export default App;
