import React from 'react';
import {
  View,
  Text,
  Alert,
} from 'react-native';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/Button/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../constants/theme';
import { styles } from './HomeScreen.styles';

export const HomeScreen: React.FC = () => {
  const { user, logout } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            setLoading(true);
            try {
              await logout();
            } catch (error) {
              Alert.alert('Error', 'Failed to logout. Please try again.');
            } finally {
              setLoading(false);
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.View entering={FadeIn.duration(600)} style={styles.header}>
          <View style={styles.avatarContainer}>
          <Icon name="person" size={48} color={colors.primary} />
          </View>
          <Text style={styles.welcomeText}>Welcome!</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.card}>
          <View style={styles.infoRow}>
            <Icon name="person-outline" size={24} color={colors.primary} />
            <View style={styles.infoContent}>
              <Text style={styles.label}>Name</Text>
              <Text style={styles.value}>{user?.name}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Icon name="mail-outline" size={24} color={colors.primary} />
            <View style={styles.infoContent}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{user?.email}</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(400).duration(600)}>
          <Button
            title="Logout"
            onPress={handleLogout}
            loading={loading}
            variant="outline"
            style={styles.logoutButton}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
