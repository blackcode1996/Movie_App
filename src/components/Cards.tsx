import React from 'react';

interface CardProps {
  title: string;
  date: string;
  imageUrl: string;
  rating: string;
}

const Cards: React.FC<CardProps> = ({ title, date, imageUrl, rating }) => {
  return (
    <div className="relative w-full h-full rounded-lg bg-cover bg-center bg-black p-2">
      <img src={imageUrl} className="w-full h-auto rounded-lg" alt={title} />
      <div className="w-16 h-16 bg-white rounded-full absolute top-[-35px] left-[150px] flex items-center justify-center">
        <div className="w-[60px] h-[60px] border-4 p-2 rounded-full border-green-600 flex justify-center items-center">
          <p className="font-medium">{rating}</p>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-white text-xl">{title}</p>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  );
};

export default Cards;
