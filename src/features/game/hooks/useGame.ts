import { useState, useEffect } from 'react';
import { checkWinner, isBoardFull } from '@/src/features/game/utils/helpers';
import { findBestMove } from '@/src/features/game/utils/minimax';
import { EGameStatus, EPlayer, EPlayerOrder, INITIAL_BOARD } from '@/src/constants/game';
import { TBoard } from '../types';

export const useGame = () => {
  const [board, setBoard] = useState<TBoard>(INITIAL_BOARD);
  const [gameStatus, setGameStatus] = useState<EGameStatus>(EGameStatus.Playing);
  const [playerOrder, setPlayerOrder] = useState<EPlayerOrder>(EPlayerOrder.Human);
  const [isComputerTurn, setIsComputerTurn] = useState(false);
  const [isGameActive, setIsGameActive] = useState(false);

  useEffect(() => {
    if (isGameActive && isComputerTurn && gameStatus === EGameStatus.Playing) {
      const timer = setTimeout(() => {
        const computerMove = findBestMove(board, EPlayer.Computer);
        const newBoard = [...board];
        newBoard[computerMove] = EPlayer.Computer;
        setBoard(newBoard);
        checkGameStatus(newBoard);
        setIsComputerTurn(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isComputerTurn, board, gameStatus, isGameActive]);

  const handlePress = (index: number) => {
    if (isGameActive && !board[index] && !isComputerTurn && gameStatus === EGameStatus.Playing) {
      const newBoard = [...board];
      newBoard[index] = EPlayer.Human;
      setBoard(newBoard);
      checkGameStatus(newBoard);
      setIsComputerTurn(true);
    }
  };

  const checkGameStatus = (currentBoard: TBoard) => {
    const winner = checkWinner(currentBoard);
    if (winner) {
      setGameStatus(winner === EPlayer.Human ? EGameStatus.Won : EGameStatus.Lost);
    } else if (isBoardFull(currentBoard)) {
      setGameStatus(EGameStatus.Draw);
    }
  };

  const startNewGame = () => {
    setIsGameActive(true);
    setBoard(INITIAL_BOARD);
    setGameStatus(EGameStatus.Playing);
    setIsComputerTurn(playerOrder === EPlayerOrder.Computer);
  };

  const toggleFirstPlayer = (order: EPlayerOrder) => {
    setPlayerOrder(order);
  };

  return {
    board,
    gameStatus,
    playerOrder,
    isGameActive,
    isComputerTurn,
    handlePress,
    startNewGame,
    toggleFirstPlayer,
  };
};
