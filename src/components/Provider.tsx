"use client";
import { store } from "@/store/store";
import React from "react";
import { Provider as Reduxprovider } from "react-redux";

interface propsType {
  children: React.ReactNode;
}

export default function Provider({ children }: propsType) {
  return <Reduxprovider store={store}>{children}</Reduxprovider>;
}
