/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  

  return (
    <Context.Provider
      value={{
        transactions,
        setTransactions,
        loading,
        setLoading,
        token,
        setToken,
        name,
        setName,
      }}
    >
      {children}
    </Context.Provider>
  );
};