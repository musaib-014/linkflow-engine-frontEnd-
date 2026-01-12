import { createContext, useContext } from "react";

const ClientContext = createContext(null);

export function useClient() {
  return useContext(ClientContext);
}

export function ClientProvider({ childern, value }) {
  return (
    <ClientContext.Provider value={value}>{childern}</ClientContext.Provider>
  );
}
