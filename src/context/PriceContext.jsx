import { createContext, useState, useContext } from "react";

const PriceContext = createContext();

export const usePrice = () => useContext(PriceContext);

export const PriceProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState({
    price: null,
    location: "",
    date: "",
  });

  return (
    <PriceContext.Provider value={{ bookingDetails, setBookingDetails }}>
      {children}
    </PriceContext.Provider>
  );
};
 