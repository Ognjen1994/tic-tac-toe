import React from 'react';
import { render } from '@testing-library/react-native';
import { EGameStatus } from '@/src/constants/game';
import GameStatus from '../components/game/GameStatus';

describe('GameStatus Component', () => {
  it('shows playing status for human turn', () => {
    const { getByText } = render(
      <GameStatus status={EGameStatus.Playing} isComputerTurn={false} onReset={jest.fn()} />,
    );
    expect(getByText(/Your Turn/)).toBeTruthy();
  });

  it('shows play again button when game ended', () => {
    const { getByText } = render(
      <GameStatus status={EGameStatus.Won} isComputerTurn={false} onReset={jest.fn()} />,
    );
    expect(getByText('Play Again')).toBeTruthy();
  });

  it('shows correct message for draw', () => {
    const { getByText } = render(
      <GameStatus status={EGameStatus.Draw} isComputerTurn={false} onReset={jest.fn()} />,
    );
    expect(getByText('🤝 Draw')).toBeTruthy();
  });
});
