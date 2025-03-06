import { useState, useEffect } from 'react';
import { StorageKey, StorageService } from '@/src/services/storage';

export function usePersistentState<T>(key: StorageKey, initialValue: T): [T, (value: T) => void] {
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    const loadData = async () => {
      const data = await StorageService.getItem<T>(key);
      if (data !== null) setState(data);
    };
    loadData();
  }, [key]);

  const setPersistentState = async (value: T) => {
    setState(value);
    await StorageService.setItem(key, value);
  };

  return [state, setPersistentState];
}
