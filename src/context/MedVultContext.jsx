import { createContext, useState } from "react";

export const MedVultContext = createContext();

const MedVultContextProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  return (
    <MedVultContext.Provider value={{ patients, setPatients }}>
      {children}
    </MedVultContext.Provider>
  );
};

export default MedVultContextProvider;
