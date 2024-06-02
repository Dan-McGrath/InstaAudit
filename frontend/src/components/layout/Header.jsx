import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
const Header = () => {
  return (
    <header className="flex items-center justify-between py-3 mx-2">
      <p className="text-xl font-bold font-latoBold">InstaAudit</p>
      <FontAwesomeIcon icon={faBars} className="text-xl dark:text-white" />
    </header>
  );
};

export default Header;
