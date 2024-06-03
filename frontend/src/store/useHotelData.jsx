import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { data } from '../db/data';
import { hotelDetails } from '../db/hotelDetails';
const HotelContext = createContext({});

const sampleData = data;
const sampleHotelDetails = hotelDetails;

export const HotelProvider = ({ children }) => {
  // TODO: Make fetch requests to get hotel data
  const [data, setData] = useState({});
  const [hotelDetails, setHotelDetails] = useState([]);
  const [hotelData, setHotelData] = useState([]);
  const [auditDate, setAuditDate] = useState(Date.now());

  const submitData = async (data) => {
    setHotelData([...hotelData, data]);
    setData(data);
  };

  const fetchHotelData = async () => {
    setHotelData(sampleData);
  };

  useEffect(() => {
    const fetchHotelDetails = async () => {
      setHotelDetails(sampleHotelDetails);
    };
    fetchHotelDetails();
  }, []);

  const value = useMemo(
    () => ({
      data,
      hotelDetails,
      hotelData,
      auditDate,
      fetchHotelData,
      submitData,
    }),
    [data, hotelDetails, hotelData, auditDate],
  );

  return <HotelContext.Provider value={value}>{children}</HotelContext.Provider>;
};

export const useHotelData = () => {
  return useContext(HotelContext);
};
