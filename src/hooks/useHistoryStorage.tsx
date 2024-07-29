import { useState, useEffect } from "react";
import useLocalStorage from "./useStorage.tsx";

type ThistoryStorage<T> = [
  T,
  (newState: T) => void,
  () => void,
  () => void,
  boolean,
  boolean,
  () => void,
];

function useHistoryStorage<T>(
  key: string = "key",
  initialValue: T = {} as T,
): ThistoryStorage<T> {
  const [history, setHistory] = useLocalStorage(key, [initialValue]);

  const [index, setIndex] = useState(0);
  const states = history;
  const canUndo: boolean = index > 0;
  const canRedo: boolean = index < states.length - 1;
  const state: T = states[index];

  useEffect(() => {
    setIndex(history.length - 1);
  }, []);

  function undo() {
    if (!canUndo) return;
    setIndex((pre) => pre - 1);
  }

  function redo() {
    if (!canRedo) return;
    setIndex((pre) => pre + 1);
  }

  function set(newState: T): void {
    const getNewhistory = (preHistory: T[]) => {
      const newStates = [...preHistory];
      const stateLen = preHistory.length;

      if (index !== stateLen - 1) {
        newStates.splice(index + 1, stateLen - index - 1, newState);
      } else {
        newStates.push(newState);
      }
      setIndex((pre) => pre + 1);
      return newStates;
    };
    setHistory(getNewhistory(history));
  }
  function clear(): void {
    setHistory([]);
    setIndex(0);
  }
  return [state, set, undo, redo, canUndo, canRedo, clear];
}

export default useHistoryStorage;
