import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CardProps {
  title: string;
  date: string;
  imageUrl: string;
  rating: string; 
}

const Cards: React.FC<CardProps> = ({ title, date, imageUrl, rating }) => {
  const ratingValue = Math.min(Math.max(parseFloat(rating), 0), 10); 
  const percentage = (ratingValue / 10) * 100; 

  const pathColor = ratingValue > 7 ? 'green' : (ratingValue >= 6 ? 'orange' : 'red');

  return (
    <div className="relative w-full h-full rounded-lg bg-black p-2">
      <img src={imageUrl} className="w-full h-auto rounded-lg" alt={title} />
      <div className="absolute left-1/2 top-[-30px] transform -translate-x-1/2 w-[80px] h-[80px] md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px] z-20 bg-white rounded-full flex items-center justify-center">
        <CircularProgressbar
          value={percentage}
          text={`${ratingValue.toFixed(1)}`} 
          styles={buildStyles({
            pathColor: pathColor,
            textColor: '#000',
            trailColor: '#d6d6d6',
            strokeLinecap: 'round',
            textSize: "16px", 
            backgroundColor: "white"
          })}
        />
      </div>
      <div className="mt-10">
        <p className="text-white text-xl p-1">{title}</p>
        <p className="text-gray-400 text-sm p-1">{date}</p>
      </div>
    </div>
  );
};

export default Cards;
