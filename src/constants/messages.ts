import { EGameStatus } from './game';

export const STATUS_MESSAGES = {
  [EGameStatus.Playing]: {
    human: 'Your Turn! 👤',
    computer: "Computer's Turn... 🤖",
  },
  [EGameStatus.Won]: '🎉 You Won!',
  [EGameStatus.Lost]: '🤖 You Lost',
  [EGameStatus.Draw]: '🤝 Draw',
} as const;
