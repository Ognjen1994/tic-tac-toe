import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { EPlayer } from '@/src/constants/game';
import Grid from '../components/game/Grid';

describe('Grid Component', () => {
  const mockPress = jest.fn();
  const emptyBoard = Array(9).fill(null);
  const partialBoard = [
    EPlayer.Human,
    null,
    EPlayer.Computer,
    null,
    EPlayer.Human,
    null,
    null,
    null,
    EPlayer.Computer,
  ];

  it('renders 9 empty cells', () => {
    const { getAllByLabelText } = render(<Grid board={emptyBoard} onPress={mockPress} />);
    const cells = getAllByLabelText('Empty cell');
    expect(cells.length).toBe(9);
  });

  it('renders correct cell states', () => {
    const { getAllByText, getAllByLabelText } = render(
      <Grid board={partialBoard} onPress={mockPress} />,
    );

    const xCells = getAllByText('X');
    expect(xCells.length).toBe(2);

    const oCells = getAllByText('O');
    expect(oCells.length).toBe(2);

    const emptyCells = getAllByLabelText('Empty cell');
    expect(emptyCells.length).toBe(5);
  });

  it('calls onPress with correct index', () => {
    const { getAllByLabelText } = render(<Grid board={emptyBoard} onPress={mockPress} />);

    const cells = getAllByLabelText('Empty cell');
    fireEvent.press(cells[4]);

    expect(mockPress).toHaveBeenCalledWith(4);
  });

  it('calls onPress for empty cells', () => {
    const mockPress = jest.fn();
    const { getAllByLabelText } = render(<Grid board={emptyBoard} onPress={mockPress} />);

    const emptyCells = getAllByLabelText('Empty cell');
    emptyCells.forEach((cell, index) => {
      fireEvent.press(cell);
      expect(mockPress).toHaveBeenCalledWith(index);
    });
  });
});
