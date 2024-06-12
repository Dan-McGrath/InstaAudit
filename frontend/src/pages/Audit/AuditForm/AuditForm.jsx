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

  if (currentForm === formLinks[0]) {
    return (
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

        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
          <RevenueDataForm />
        </form>
      </>
    );
  } else if (currentForm === formLinks[1]) {
    return (
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
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
          <RoomDataForm />
        </form>
      </>
    );
  } else if (currentForm === formLinks[2]) {
    return (
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
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
          <RoomInfoForm />
        </form>
      </>
    );
  }
};

export default AuditForm;

//<form onSubmit={(e) => sumbitData(e)} className="w-3/4 mx-auto ">
//   <div className="flex justify-end w-full mb-2">
//     <input
//       type="submit"
//       disabled
//       className="px-2 py-1 rounded-md bg-secondaryColor disabled:bg-gray-500 disabled:text-white"
//     />
//   </div>
//   <fieldset className="flex flex-col items-center gap-4">
//     <legend className="mb-2 font-semibold text-center text-primaryColor">Revenue</legend>
//     <label className="" htmlFor="roomRevenue">
//       Room Revenue
//     </label>
//     <input
//       type="number"
//       id="roomRevenue"
//       placeholder="Room Revenue"
//       value={roomRevenue}
//       onChange={(e) => setRoomRevenue(Number(e.target.value))}
//     />
//     <label className="" htmlFor="groupRevenue">
//       Group Revenue
//     </label>
//     <input
//       type="number"
//       id="groupRevenue"
//       placeholder="Group Revenue"
//       value={groupRevenue}
//       onChange={(e) => setGroupRevenue(Number(e.target.value))}
//     />
//     <label className="" htmlFor="contractRevenue">
//       Contract Revenue
//     </label>
//     <input
//       type="number"
//       id="contractRevenue"
//       placeholder="Contract Revenue"
//       value={contractRevenue}
//       onChange={(e) => setcontractRevenue(Number(e.target.value))}
//     />
//   </fieldset>
// </form>
