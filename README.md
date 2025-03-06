# Tic Tac Toe 🎮

Tic Tac Toe game built with React Native & Expo.

## 🚀 Quick Start

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm start
```

### Launch platforms

```bash
npm run android  # Android
npm run ios      # iOS
npm run web      # Web
```

## 🔧 Technical Implementation

### Core Technologies

- React Native 0.76
- Expo SDK 52
- TypeScript 5.3
- React Navigation 7
- AsyncStorage for persistence

## 🛠 Development Commands

| Command            | Description               |
| ------------------ | ------------------------- |
| `npm test`         | Run test watcher          |
| `npm run lint`     | Check for lint errors     |
| `npm run format`   | Format code with Prettier |
| `npm run lint:fix` | Fix lint issues           |

## 🤖 AI Implementation

The computer uses the Minimax algorithm:

- Scores potential moves
- Always chooses optimal path
- Implemented in `src/features/game/utils/minimax.ts`

## 🔍 Code Review Considerations

### ✅ Code Quality

- Type-safe components
- Linting configured
- Jest test cases

### ✅ AI Computer

- Properly blocks wins
- Always seeks victory
- Impossible to beat

### ✅ UI Features

- Game state management
- Player name persistence
- Clear status messages
