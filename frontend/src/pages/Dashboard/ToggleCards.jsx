import Card from '../../components/Card';
import { formatToDollars } from '../../utils/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ToggleCards = ({ hotelOverviewData, handleClick, text }) => {
  const arrayOfValues = Object.values(hotelOverviewData);
  return (
    <>
      <div className="flex flex-col gap-1">
        <Card data={formatToDollars(arrayOfValues[3])} text={`Transient ${text}`} />
        <Card data={formatToDollars(arrayOfValues[1])} text={`Group ${text}`} />
        <Card data={formatToDollars(arrayOfValues[2])} text={`Contract ${text}`} />
      </div>
      <button onClick={handleClick} className="flex items-center justify-center gap-2 my-1">
        <p className="text-sm">Less info</p>
        <FontAwesomeIcon icon={faChevronUp} className="text-sm" />
      </button>
    </>
  );
};

export default ToggleCards;
