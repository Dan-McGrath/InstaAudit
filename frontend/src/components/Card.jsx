const Card = ({ data, text }) => {
  return (
    <div className="flex justify-between">
      <p className="text-lg font-bold text-primaryColor">{text}</p>
      <p className="text-lg text-black">{data}</p>
    </div>
  );
};

export default Card;
