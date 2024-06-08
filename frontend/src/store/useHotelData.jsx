import { createContext, useContext, useMemo, useState, useEffect, useCallback } from 'react';

const HotelContext = createContext({});

export const HotelProvider = ({ children }) => {
  // TODO: Make fetch requests to get hotel data
  const [auditData, setAuditData] = useState({});
  const [hotelDetails, setHotelDetails] = useState({});
  const [hotelData, setHotelData] = useState([]);
  const [businessDate, setBusinessDate] = useState(new Date());
  const [hotelOverviewData, setHotelOverviewData] = useState({});
  const [ytd, setYtd] = useState(new Date(new Date().getFullYear(), 0, 1));
  const [mtd, setMtd] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  // URL
  const fetchURL = 'http://localhost:3500';
  const hotelDetailEndpoint = '/hotelDetails';
  const hotelDataEndpoint = '/hotelData';

  const getOverviewByDate = useCallback(
    async (date = businessDate) => {
      const response = await fetch(`${fetchURL}${hotelDataEndpoint}?date=${date}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setHotelOverviewData(data);
    },
    [businessDate],
  );

  useEffect(() => {
    getOverviewByDate(businessDate.toISOString());
  }, [getOverviewByDate, businessDate]);

  const submitData = async (data) => {
    const response = await fetch(fetchURL + hotelDataEndpoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const submittedData = await response.json();
    setHotelData([...hotelData, submittedData]);
    setAuditData(submittedData);
  };

  // TODO: Find a way to differ this so it dosn't cause issues with other info sent
  const fetchHotelData = async () => {
    const response = await fetch(fetchURL + hotelDataEndpoint, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setHotelData(data);
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
      const data = await response.json();
      setHotelDetails(data);
    };
    fetchHotelDetails();
  }, []);

  const value = useMemo(
    () => ({
      auditData,
      hotelDetails,
      hotelData,
      businessDate,
      hotelOverviewData,
      ytd,
      mtd,
      fetchHotelData,
      submitData,
      setBusinessDate,
      getOverviewByDate,
      setYtd,
      setMtd,
    }),
    [auditData, hotelDetails, hotelData, businessDate, hotelOverviewData],
  );

  return <HotelContext.Provider value={value}>{children}</HotelContext.Provider>;
};

export const useHotelData = () => {
  return useContext(HotelContext);
};
