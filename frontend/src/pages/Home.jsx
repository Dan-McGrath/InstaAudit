import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <main className="flex flex-col mt-12 justify-evenly grow">
      <div className="mx-1">
        <div className="flex flex-col text-center text-pretty">
          <h1 className="text-5xl font-bold leading-[3rem] font-heading">Make data entry easier and safe.</h1>
          <p className="p-2 mt-2 text-lg leading-7 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ut excepturi, corporis voluptates atque
            quidem perspiciatis.
          </p>
          <div className="py-4 mx-auto text-white rounded-md cursor-pointer px-7 my-7 bg-primaryColor/90 hover:bg-primaryColor/80 hover:text-slate-900 ">
            <button className="text-lg font-lato ">Make life easy</button>
          </div>
          <div className="flex gap-2 mx-auto my-7">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 " />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 " />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 " />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 " />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 " />
          </div>
          <Testimonial />
        </div>
        <div></div>
      </div>
      <div className=""></div>
    </main>
  );
};

export default Home;
