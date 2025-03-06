import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { EPlayer } from '@/src/constants/game';
import Cell from '../components/game/Cell';

describe('Cell Component', () => {
  it('renders empty cell correctly', () => {
    const { getByLabelText } = render(<Cell value={null} onPress={jest.fn()} />);
    expect(getByLabelText('Empty cell')).toBeTruthy();
  });

  it('displays X when value is human', () => {
    const { getByText, getByLabelText } = render(
      <Cell value={EPlayer.Human} onPress={jest.fn()} />,
    );
    expect(getByText('X')).toBeTruthy();
    expect(getByLabelText('X marker')).toBeTruthy();
  });

  it('calls onPress when empty cell is pressed', () => {
    const mockPress = jest.fn();
    const { getByLabelText } = render(<Cell value={null} onPress={mockPress} />);
    fireEvent.press(getByLabelText('Empty cell'));
    expect(mockPress).toHaveBeenCalled();
  });

  it('does not call onPress when cell is occupied', () => {
    const mockPress = jest.fn();
    const { getByLabelText } = render(<Cell value={EPlayer.Human} onPress={mockPress} />);
    fireEvent.press(getByLabelText('X marker'));
    expect(mockPress).not.toHaveBeenCalled();
  });
});
