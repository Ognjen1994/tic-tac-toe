import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';
import { EPlayer } from '@/src/constants/game';

type TGridProps = {
  board: Array<string | null>;
  onPress: (index: number) => void;
};

export default function Grid({ board, onPress }: TGridProps) {
  return (
    <View style={styles.grid}>
      {board.map((cell, index) => (
        <Cell key={index} value={cell as EPlayer | null} onPress={() => onPress(index)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    margin: 20,
  },
});
