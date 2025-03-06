import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useGame } from '@/src/features/game/hooks/useGame';
import Grid from '@/src/components/game/Grid';
import GameStatus from '@/src/components/game/GameStatus';
import ToggleButton from '@/src/components/ui/ToggleButton';
import { EPlayerOrder } from '@/src/constants/game';
import { SPACING, COLORS, FONTS } from '@/src/constants/theme';
import { usePlayer } from '@/src/context/PlayerContext';

export default function GameScreen() {
  const {
    board,
    gameStatus,
    playerOrder,
    isGameActive,
    isComputerTurn,
    handlePress,
    startNewGame,
    toggleFirstPlayer,
  } = useGame();

  const { playerName } = usePlayer();

  const scaleValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container} testID="game-screen">
      <Animated.Text style={[styles.title, { transform: [{ scale: scaleValue }] }]}>
        Tic Tac Toe
      </Animated.Text>

      <View style={styles.toggleContainer}>
        <ToggleButton
          label={`${playerName || 'Human'} First`}
          isActive={playerOrder === EPlayerOrder.Human}
          onPress={() => toggleFirstPlayer(EPlayerOrder.Human)}
        />
        <ToggleButton
          label="Computer First"
          isActive={playerOrder === EPlayerOrder.Computer}
          onPress={() => toggleFirstPlayer(EPlayerOrder.Computer)}
        />
      </View>

      {!isGameActive && (
        <TouchableOpacity
          style={styles.startButton}
          onPress={startNewGame}
          accessibilityLabel="Start Game"
        >
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
      )}

      {isGameActive && (
        <>
          <Grid board={board} onPress={handlePress} />
          <GameStatus status={gameStatus} onReset={startNewGame} isComputerTurn={isComputerTurn} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.large,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: FONTS.xxLarge,
    fontWeight: 'bold',
    marginBottom: SPACING.xLarge,
    color: COLORS.primary,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: SPACING.medium,
    gap: SPACING.small,
  },
  startButton: {
    backgroundColor: COLORS.success,
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.xLarge,
    borderRadius: 8,
    marginTop: SPACING.large,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONTS.medium,
    fontWeight: '600',
  },
});
