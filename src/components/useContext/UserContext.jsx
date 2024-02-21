import { createContext } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const userData = {
    name: "Amandeep Singh",
    age: "22",
    profession: "Frontend Developer",
  };

  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
