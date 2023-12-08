"use client";

import { useRef } from "react";
import type { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore, type AppStore } from "./store";

type IProps = {
  children: ReactNode;
};

const StoreProvider: FC<IProps> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
