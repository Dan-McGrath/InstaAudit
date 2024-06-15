import { useState } from 'react';
import { useHotelData } from '../../../store/useHotelData';
import RoomInfoForm from './RoomInfoForm';
import RoomDataForm from './RoomDataForm';
import RevenueDataForm from './RevenueDataForm';

const AuditForm = () => {
  const { sumbitData, setAduitData, auditData } = useHotelData();

  const formLinks = ['Revenue Totals', 'Room Totals', 'Room Info'];

  const [currentForm, setCurrentForm] = useState(formLinks[0]);
  const [canSubmit, setCanSubmit] = useState(false);
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const saveAndContinue = () => {
    const current = formLinks.indexOf(currentForm);
    if (current === -1) {
      setCurrentForm(formLinks[0]);
    } else if (current === formLinks.length - 1) {
      setCurrentForm(formLinks[0]);
    } else {
      setCurrentForm(formLinks[current + 1]);
    }
  };

  let navBar;
  let formComponent = (
    <RevenueDataForm auditData={auditData} setAuditData={setAduitData} error={error} setError={setError} />
  );

  if (currentForm === formLinks[0]) {
    navBar = (
      <>
        <nav>
          <ul className="flex items-center justify-center gap-2">
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
    formComponent = <RevenueDataForm auditData={auditData} setAuditData={setAduitData} />;
  } else if (currentForm === formLinks[1]) {
    navBar = (
      <>
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
    formComponent = <RoomDataForm auditData={auditData} setAuditData={setAduitData} />;
  } else if (currentForm === formLinks[2]) {
    navBar = (
      <>
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
    formComponent = <RoomInfoForm auditData={auditData} setAuditData={setAduitData} />;
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-center text-primaryColor">Audit Data</h2>
      {navBar}
      <form onSubmit={handleSubmit} className="w-11/12 mx-auto">
        <div className="flex justify-center w-11/12 mx-auto">
          {canSubmit ? (
            <>
              <button type="submit" className="w-3/4 px-2 py-1 mx-auto my-3 rounded-md bg-accentColor">
                Submit
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={saveAndContinue} className="px-2 py-1 my-4 rounded-md bg-accentColor">
                Save and Continue
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col w-full gap-5 px-3 py-4 mx-auto my-4 text-white rounded-md shadow-xl bg-primaryColor">
          {formComponent}
        </div>
      </form>
    </>
  );
};

export default AuditForm;
