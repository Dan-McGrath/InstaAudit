import { useState } from 'react';
import { useHotelData } from '../../../store/useHotelData';
import RoomInfoForm from './RoomInfoForm';
import RoomDataForm from './RoomDataForm';
import RevenueDataForm from './RevenueDataForm';

const AuditForm = () => {
  const { sumbitData } = useHotelData();

  const formLinks = ['Revenue Totals', 'Room Totals', 'Room Info'];

  const [currentForm, setCurrentForm] = useState(formLinks[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let navBar;
  let formComponent = <RevenueDataForm />;

  if (currentForm === formLinks[0]) {
    navBar = (
      <>
        <h2 className="text-2xl font-bold text-center text-primaryColor">Audit Data</h2>
        <nav>
          <ul className="flex items-center justify-center gap-1">
            <li
              className="p-2 text-white rounded-md bg-secondaryColor font-cta"
              onClick={() => setCurrentForm(formLinks[0])}
            >
              Revenue Totals
            </li>
            <li className="p-2 rounded-md bg-secondaryColor font-cta" onClick={() => setCurrentForm(formLinks[1])}>
              Room Totals
            </li>
            <li className="p-2 rounded-md bg-secondaryColor font-cta" onClick={() => setCurrentForm(formLinks[2])}>
              Room Info
            </li>
          </ul>
        </nav>
      </>
    );
    formComponent = <RevenueDataForm />;
  } else if (currentForm === formLinks[1]) {
    navBar = (
      <>
        <h2 className="text-2xl font-bold text-center text-primaryColor">Audit Data</h2>
        <nav>
          <ul className="flex items-center justify-center gap-1">
            <li className="p-2 rounded-md bg-secondaryColor font-cta" onClick={() => setCurrentForm(formLinks[0])}>
              Revenue Totals
            </li>
            <li
              className="p-2 text-white rounded-md bg-secondaryColor font-cta"
              onClick={() => setCurrentForm(formLinks[1])}
            >
              Room Totals
            </li>
            <li className="p-2 rounded-md bg-secondaryColor font-cta" onClick={() => setCurrentForm(formLinks[2])}>
              Room Info
            </li>
          </ul>
        </nav>
      </>
    );
    formComponent = <RoomDataForm />;
  } else if (currentForm === formLinks[2]) {
    navBar = (
      <>
        <h2 className="text-2xl font-bold text-center text-primaryColor">Audit Data</h2>
        <nav>
          <ul className="flex items-center justify-center gap-1">
            <li className="p-2 rounded-md bg-secondaryColor font-cta" onClick={() => setCurrentForm(formLinks[0])}>
              Revenue Totals
            </li>
            <li className="p-2 rounded-md bg-secondaryColor font-cta" onClick={() => setCurrentForm(formLinks[1])}>
              Room Totals
            </li>
            <li
              className="p-2 text-white rounded-md bg-secondaryColor font-cta"
              onClick={() => setCurrentForm(formLinks[2])}
            >
              Room Info
            </li>
          </ul>
        </nav>
      </>
    );
    formComponent = <RoomInfoForm />;
  }

  return (
    <>
      {navBar}
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
        {formComponent}
      </form>
    </>
  );
};

export default AuditForm;
