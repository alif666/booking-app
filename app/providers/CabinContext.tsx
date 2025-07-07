// context/CabinContext.tsx
"use client";
import { createContext, useReducer, useContext, ReactNode } from "react";

type FormState = {
  name: string;
  regularPrice: number;
  discount: number;
  maxCapacity: number;
  description: string;
  image: string;

};
const initialState: FormState = {
    name: "",
    regularPrice: 0,
    discount: 0,
    maxCapacity: 1,
    description: "",
    image: "",

};

type Action =
  | { type: "UPDATE_FIELD"; field: keyof FormState; value: string | number }
  | { type: "RESET_FORM" };

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

const CabinContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function CabinProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CabinContext.Provider value={{ state, dispatch }}>
      {children}
    </CabinContext.Provider>
  );
}

export function useCabin() {
  const context = useContext(CabinContext);
  if (!context) {
    throw new Error("useCabin must be used within a CabinProvider");
  }
  return context;
}
