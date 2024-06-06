import Card from '../../components/Card';
import { formatToDollars } from '../../utils/helper';
import { useHotelData } from '../../store/useHotelData';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ToggleCards from './ToggleCards';

const OverviewTiles = () => {
  const { hotelOverviewData } = useHotelData();
  const [moreInfoOpenAdr, setMoreInfoOpenAdr] = useState(false);
  const [moreInfoOpenRevPar, setMoreInfoOpenRevPar] = useState(false);

  const handleToggleMoreInfoAdr = () => {
    setMoreInfoOpenAdr(!moreInfoOpenAdr);
  };

  const handleToggleMoreInfoRevPar = () => {
    setMoreInfoOpenRevPar(!moreInfoOpenRevPar);
  };

  return (
    <>
      {Object.keys(hotelOverviewData).length !== 0 && (
        <div className="grid mx-2">
          <div className="flex flex-col gap-2 px-5 py-3 border rounded-md shadow-lg justify-evenly">
            <div>
              <Card data={formatToDollars(hotelOverviewData.adr.totalAdr)} text="ADR" />
            </div>
            {moreInfoOpenAdr ? (
              <ToggleCards hotelOverviewData={hotelOverviewData.adr} handleClick={handleToggleMoreInfoAdr} text="ADR" />
            ) : (
              <button onClick={handleToggleMoreInfoAdr} className="flex items-center justify-center gap-1 my-1">
                <p className="text-sm">More info</p>
                <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
              </button>
            )}
          </div>
          <div className="flex flex-col gap-2 p-5 border rounded-md shadow-lg justify-evenly">
            <div>
              <Card data={formatToDollars(hotelOverviewData.revPar.totalRevPar)} text="RevPar" />
            </div>
            {moreInfoOpenRevPar ? (
              <ToggleCards
                hotelOverviewData={hotelOverviewData.revPar}
                handleClick={handleToggleMoreInfoRevPar}
                text="RevPar"
              />
            ) : (
              <button onClick={handleToggleMoreInfoRevPar} className="flex items-center justify-center gap-2 my-1">
                <p className="text-sm">More info</p>
                <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OverviewTiles;
