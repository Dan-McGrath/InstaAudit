import { Outlet } from 'react-router-dom';
import { useHotelData } from '../../store/useHotelData';
import { format } from 'date-fns';

const Audit = () => {
  const { businessDate } = useHotelData();
  return (
    <main className="mt-12">
      <div className="pr-3 mb-3 text-right">
        <p>
          Business Date:{' '}
          <span className="font-semibold text-primaryColor">{format(businessDate, 'MMMM dd, yyyy')}</span>
        </p>
      </div>
      <Outlet />
    </main>
  );
};

export default Audit;
