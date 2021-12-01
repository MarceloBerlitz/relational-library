import { createContext, useContext } from "react";
import { books, users } from "../api";

const providerValue = { books, users };

const ServicesContext = createContext(providerValue);

type Props = {
  children: React.ReactNode;
};

export const ServiceProvider = (props: Props) => {
  return (
    <ServicesContext.Provider value={providerValue}>
      {props.children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
