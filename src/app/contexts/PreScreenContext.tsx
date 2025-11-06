// app/contexts/PreScreenContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface PreScreenContextType {
  isPreScreenDone: boolean;
  setIsPreScreenDone: (done: boolean) => void;
}

const PreScreenContext = createContext<PreScreenContextType | undefined>(
  undefined
);

export function PreScreenProvider({ children }: { children: ReactNode }) {
  const [isPreScreenDone, setIsPreScreenDone] = useState(false);

  return (
    <PreScreenContext.Provider value={{ isPreScreenDone, setIsPreScreenDone }}>
      {children}
    </PreScreenContext.Provider>
  );
}

export function usePreScreen() {
  const context = useContext(PreScreenContext);
  if (!context)
    throw new Error("usePreScreen must be used within PreScreenProvider");
  return context;
}
