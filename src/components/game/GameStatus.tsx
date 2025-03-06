import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { STATUS_MESSAGES } from '@/src/constants/messages';
import { EGameStatus } from '@/src/constants/game';
import { COLORS, SPACING, FONTS } from '@/src/constants/theme';

interface IGameStatusProps {
  status: EGameStatus;
  onReset: () => void;
  isComputerTurn: boolean;
}

export default function GameStatus({ status, onReset, isComputerTurn }: IGameStatusProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        {status === EGameStatus.Playing
          ? isComputerTurn
            ? STATUS_MESSAGES[EGameStatus.Playing].computer
            : STATUS_MESSAGES[EGameStatus.Playing].human
          : STATUS_MESSAGES[status]}
      </Text>
      {status !== EGameStatus.Playing && (
        <TouchableOpacity style={styles.button} onPress={onReset} accessibilityLabel="Play Again">
          <Text style={styles.buttonText}>Play Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.large,
    alignItems: 'center',
  },
  statusText: {
    fontSize: FONTS.xLarge,
    fontWeight: 'bold',
    marginBottom: SPACING.medium,
    color: COLORS.text,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.xLarge,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONTS.medium,
    fontWeight: '600',
  },
});
