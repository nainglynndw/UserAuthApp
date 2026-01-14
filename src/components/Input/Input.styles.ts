import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    fontSize: typography.small,
    color: colors.text,
    marginBottom: spacing.sm,
    fontWeight: '600',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    fontSize: typography.body,
    color: colors.text,
    minHeight: 56,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  inputError: {
    borderColor: colors.error,
  },
  eyeIcon: {
    position: 'absolute',
    right: spacing.md,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  errorText: {
    color: colors.error,
    fontSize: typography.small,
    marginTop: spacing.sm,
  },
});
