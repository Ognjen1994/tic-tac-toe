export enum EGameStatus {
  Playing = 'playing',
  Won = 'won',
  Lost = 'lost',
  Draw = 'draw',
}

export enum EPlayer {
  Human = 'X',
  Computer = 'O',
}

export enum EPlayerOrder {
  Human = 'human',
  Computer = 'computer',
}

export const INITIAL_BOARD = Array(9).fill(null);
