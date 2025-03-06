import { TBoard } from '../types';
import { checkWinner, isBoardFull } from './helpers';
import { EPlayer } from '@/src/constants/game';

export const findBestMove = (board: TBoard, computerSymbol: EPlayer): number => {
  let bestScore = -Infinity;
  let bestMove = -1;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      const newBoard = [...board];
      newBoard[i] = computerSymbol;
      const score = minimax(newBoard, 0, false, computerSymbol);
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  return bestMove;
};

const minimax = (
  board: TBoard,
  depth: number,
  isMaximizing: boolean,
  computerSymbol: EPlayer,
): number => {
  const humanSymbol = computerSymbol === EPlayer.Computer ? EPlayer.Human : EPlayer.Computer;
  const winner = checkWinner(board);

  if (winner === computerSymbol) return 1;
  if (winner === humanSymbol) return -1;
  if (isBoardFull(board)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        const newBoard = [...board];
        newBoard[i] = computerSymbol;
        const score = minimax(newBoard, depth + 1, false, computerSymbol);
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        const newBoard = [...board];
        newBoard[i] = humanSymbol;
        const score = minimax(newBoard, depth + 1, true, computerSymbol);
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};
