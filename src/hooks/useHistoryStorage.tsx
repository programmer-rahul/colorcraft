import { useState, useEffect } from "react";
import { useLocalStorage } from "./useStorage.tsx";

type ThistoryStorage = {
  canUndo: boolean;
  canRedo: boolean;
  undo: () => void;
  redo: () => void;
  state: T;
  set: (newState: T) => void;
  clear: () => void;
};

function useHistoryStorage(key = "key", initialValue = {}): ThistoryStorage {
  const [history, setHistory] = useLocalStorage(key, [initialValue]);

  const [index, setIndex] = useState(0);
  const states = history;
  const canUndo: boolean = index > 0;
  const canRedo: boolean = index < states.length - 1;
  const state = states[index];

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
    const newStateCopy = Array.isArray(newState)
      ? [...newState]
      : { ...newState };
    setHistory((preHistory) => {
      const newStates = [...preHistory];
      const stateLen = preHistory.length;

      if (index !== stateLen - 1) {
        newStates.splice(index + 1, stateLen - index - 1, newStateCopy);
      } else {
        newStates.push(newStateCopy);
      }
      setIndex((pre) => pre + 1);
      return newStates;
    });
  }
  function clear(): void {
    setHistory([]);
    setIndex(0);
  }
  return [state, set, undo, redo, canUndo, canRedo, clear];
}

function useHistoryState(initialValue = {}): ThistoryStorage {
  const [history, setHistory] = useState({
    states: [initialValue],
    index: 0,
  });

  const { states, index } = history;
  const canUndo: boolean = index > 0;
  const canRedo: boolean = index < states.length - 1;
  const state = states[index];

  function undo() {
    if (!canUndo) return;
    setHistory((preHistory) => {
      const newHistory = {
        ...preHistory,
        index: index - 1,
      };
      return newHistory;
    });
  }

  function redo() {
    if (!canRedo) return;
    setHistory((preHistory) => {
      const newHistory = {
        ...preHistory,
        index: index + 1,
      };
      return newHistory;
    });
  }

  function set(newState: T): void {
    console.log("set called");
    const newStateCopy = Array.isArray(newState)
      ? [...newState]
      : { ...newState };
    setHistory((preHistory) => {
      const newStates = [...preHistory.states];
      const stateLen = preHistory.states.length;

      if (index !== stateLen - 1) {
        newStates.splice(index + 1, stateLen - index - 1, newStateCopy);
      } else {
        newStates.push(newStateCopy);
      }

      return {
        states: newStates,
        index: index + 1,
      };
    });
  }
  function clear(): void {
    setHistory((preHistory) => {
      return {
        ...preHistory,
        states: [],
        index: 0,
      };
    });
  }
  return [state, set, undo, redo, canUndo, canRedo, clear];
}

export { useHistoryStorage, useHistoryState };
