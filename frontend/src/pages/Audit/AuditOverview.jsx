import { useHotelData } from '../../store/useHotelData';
import { useNavigate } from 'react-router-dom';

const AuditOverview = () => {
  const { auditData } = useHotelData();
  const navigate = useNavigate();
  return Object.keys(auditData).length !== 0 ? (
    <>
      <h2>Audit Data</h2>
    </>
  ) : (
    <>
      <h2 className="my-6 text-3xl font-bold text-center text-primaryColor">Audit Data</h2>
      <div className="flex flex-col items-center w-3/4 gap-2 px-2 py-3 mx-auto text-center border rounded-md shadow-lg inset-5 text-pretty">
        <p>No audit data submited.</p>
        <p>Please submit audit to see data.</p>
        <button
          className="px-3 py-2 my-3 text-white rounded-full font-cta bg-primaryColor hover:bg-primaryColor/85"
          onClick={() => navigate('./submit', { relative: 'path' })}
        >
          Submit Audit
        </button>
      </div>
    </>
  );
};

export default AuditOverview;
