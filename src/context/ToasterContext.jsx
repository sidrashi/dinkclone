import { createContext, useContext, useState } from "react";
import Toaster from "../components/Toaster";
import errorimg from "../assets/errorimg.svg";
import checkmark from "../assets/checkmark.svg";


const ToasterContext = createContext();

export const ToasterProvider = ({ children }) => {
  const [toastData, setToastData] = useState(null);

  const showToast = (data) => {
    setToastData(data);
  };

  return (
    <ToasterContext.Provider value={{ showToast }}>
      {children}
      <Toaster
        data={toastData}
        errorimg={errorimg}
        checkmark={checkmark}
        duration={3000}
      />
    </ToasterContext.Provider>
  );
};

export const useToaster = () => useContext(ToasterContext);
