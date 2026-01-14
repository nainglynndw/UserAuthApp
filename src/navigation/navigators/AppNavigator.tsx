import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../screens/HomeScreen/HomeScreen';
import { colors } from '../../constants/theme';
import { AppStackParamList } from '../types';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
  );
};
