import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from '../../constants/theme';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    ...shadows.medium,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.body,
    fontWeight: '600',
  },
  outlineText: {
    color: colors.primary,
  },
});
