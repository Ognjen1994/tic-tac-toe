import React from 'react';
import { usePersistentState } from '@/src/hooks/usePersistentState';

type TPlayerContextType = {
  playerName: string;
  setPlayerName: (name: string) => void;
};

const PlayerContext = React.createContext<TPlayerContextType>({
  playerName: '',
  setPlayerName: () => {},
});

export const PlayerProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [playerName, setPlayerName] = usePersistentState('playerName', '');

  return (
    <PlayerContext.Provider value={{ playerName, setPlayerName }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => React.useContext(PlayerContext);
