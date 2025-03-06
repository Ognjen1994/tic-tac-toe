import { EPlayer } from '@/src/constants/game';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from '@/src/constants/theme';

interface ICellProps {
  value: EPlayer | null;
  onPress: () => void;
  isDisabled?: boolean;
}

export default function Cell({ value, onPress, isDisabled }: ICellProps) {
  return (
    <TouchableOpacity
      style={[styles.cell, value && styles[value === EPlayer.Human ? 'cellX' : 'cellO']]}
      onPress={onPress}
      disabled={isDisabled || !!value}
      accessibilityLabel={value ? `${value} marker` : 'Empty cell'}
      accessibilityRole="button"
    >
      {value && <Text style={styles.cellText}>{value}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: SPACING.xSmall,
  },
  cellText: {
    fontSize: FONTS.xxxLarge,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  cellX: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  cellO: {
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary,
  },
});
