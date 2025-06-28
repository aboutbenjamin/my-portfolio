import { createContext, useContext, useState, createElement } from "react";

type TransitionData = {
  id: number | null;
  rect: DOMRect | null;
};

type TransitionContextType = {
  transitionData: TransitionData;
  setTransitionData: (data: TransitionData) => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function useTransitionContext() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("TransitionContext not found");
  return ctx;
}

export function TransitionProvider(props: { children: React.ReactNode }) {
  const [transitionData, setTransitionData] = useState<TransitionData>({
    id: null,
    rect: null,
  });

  return createElement(
    TransitionContext.Provider,
    { value: { transitionData, setTransitionData } },
    props.children
  );
}
