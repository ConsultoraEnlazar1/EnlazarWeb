import React, { useState } from "react";

export const MyContext = React.createContext();

export const MyProvider = ({ children }) => {
  const [scrollContact, setScrollContact] = useState(false);

  const toggleScrollContact = () => {
    setScrollContact(!scrollContact);
  };

  return (
    <MyContext.Provider
      value={{ scrollContact, setScrollContact, toggleScrollContact }}
    >
      {children}
    </MyContext.Provider>
  );
};
