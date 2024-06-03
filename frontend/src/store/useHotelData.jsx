import { createContext, useContext, useMemo, useState, useEffect } from 'react';

const HotelContext = createContext({});

export const HotelProvider = ({ children }) => {
  // TODO: Make fetch requests to get hotel data
  const [auditData, setAuditData] = useState({});
  const [hotelDetails, setHotelDetails] = useState({});
  const [hotelData, setHotelData] = useState([]);
  const [auditDate, setAuditDate] = useState(Date.now());
  const [hotelOverviewData, setHotelOverviewData] = useState({});

  // URL
  const fetchURL = 'http://localhost:3500';
  const hotelDetailEndpoint = '/hotelDetail';
  const hotelDataEndpoint = '/hotelData';

  const getHotelOverviewData = async () => {
    const response = await fetch(fetchURL + hotelDataEndpoint + '/overview', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setHotelOverviewData(response.json());
  };

  const submitData = async (data) => {
    const response = await fetch(fetchURL + hotelDataEndpoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    setHotelData([...hotelData, response.json()]);
    setAuditData(response.json());
  };

  const fetchHotelData = async () => {
    const response = await fetch(fetchURL + hotelDataEndpoint, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setHotelData(response.json);
  };

  useEffect(() => {
    const fetchHotelDetails = async () => {
      const response = await fetch(fetchURL + hotelDetailEndpoint, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setHotelDetails(response.json());
    };
    fetchHotelDetails();
  }, []);

  const value = useMemo(
    () => ({
      auditData,
      hotelDetails,
      hotelData,
      auditDate,
      hotelOverviewData,
      fetchHotelData,
      submitData,
      setAuditDate,
    }),
    [auditData, hotelDetails, hotelData, auditDate, hotelOverviewData],
  );

  return <HotelContext.Provider value={value}>{children}</HotelContext.Provider>;
};

export const useHotelData = () => {
  return useContext(HotelContext);
};
