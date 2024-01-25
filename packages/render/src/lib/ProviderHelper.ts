import { createContext, useContext } from "react";

export const PageContent = createContext({});

export const PageDispatchContent = createContext(null);

export function useSchema() {
  return useContext(PageContent);
}

export function useSchemaDispatch() {
  return useContext(PageDispatchContent);
}
