import { useGradient } from "../../../context/GradientContext";
import { Button } from "../../reusable/Button.tsx";
import { ArrowArcLeft, ArrowArcRight } from "@phosphor-icons/react";
import { useHistoryStorage } from "../../../hooks/useHistoryStorage.tsx";
import { useEffect, useState, useRef } from "react";

export default function UndoRedo() {
  const isUndoOperation = useRef(true);
  const { gradientOptions, setGradientOptions } = useGradient();
  const [newState] = useState([
    gradientOptions.angle,
    [...gradientOptions.colors],
    gradientOptions.style,
  ]);
  // If useHistoryStorage is initialized with gradientOptions, it reinitializes if gradientOptions is present
  const [state, set, undo, redo, canUndo, canRedo] = useHistoryStorage(
    "gradientState",
    newState,
  );

  useEffect(() => {
    if (!isUndoOperation.current) {
      set([
        gradientOptions.angle,
        [...gradientOptions.colors],
        gradientOptions.style,
      ]);
    } else {
      isUndoOperation.current = false;
    }
    //      We skip 'set' because it doesn't change (ESLint warning)
  }, [gradientOptions]);

  useEffect(() => {
    isUndoOperation.current = true;
    const newOption = {
      ...gradientOptions,
      angle: state[0],
      colors: [...state[1]],
      style: state[2],
    };
    setGradientOptions(newOption);
    //    We skip 'setGradientOptions' because it doesn't change (ESLint warning).
  }, [state]);

  return (
    <div className="gradient-style w-full border-b-2 bg-gray-700 p-2 lg:w-96 xl:w-64">
      <div className="flex place-content-center gap-4">
        <Button
          disabled={!canUndo}
          btnType="icon"
          variant="primary"
          onClick={undo}
        >
          <ArrowArcLeft size={32} />
        </Button>
        <Button
          disabled={!canRedo}
          btnType="icon"
          variant="primary"
          onClick={redo}
        >
          <ArrowArcRight size={32} />
        </Button>
      </div>
    </div>
  );
}
