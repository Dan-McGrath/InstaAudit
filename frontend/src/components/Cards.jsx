import React from 'react';
import Card from './Card';

const Cards = ({ data }) => {
  return (
    <>
      {data.map((ele) => (
        <Card key={ele.createdAt} data={ele} />
      ))}
    </>
  );
};

export default Cards;
