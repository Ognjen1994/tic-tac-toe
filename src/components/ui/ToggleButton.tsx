import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING } from '@/src/constants/theme';

interface IToggleButtonProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

export default function ToggleButton({ label, isActive, onPress }: IToggleButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, isActive && styles.active]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.medium,
    borderRadius: 8,
    backgroundColor: COLORS.border,
    minWidth: 120,
    alignItems: 'center',
  },
  active: {
    backgroundColor: COLORS.primary,
  },
  text: {
    color: COLORS.text,
    fontWeight: '500',
    fontSize: FONTS.medium,
  },
  activeText: {
    color: COLORS.white,
  },
});
