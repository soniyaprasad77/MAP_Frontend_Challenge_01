import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import LoadingCard from "./LoadingCard";

const Card = ({ tag, image, name, description, date }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageRef = new Image();
    imageRef.src = image;
    imageRef.onload = () => setImageLoaded(true);
  }, [image]);

  if (!imageLoaded) {
    return <LoadingCard />;
  }

  return (
    <div className='w-[300px] mx-2 max-w-sm p-2 border border-gray-200 rounded-lg shadow relative transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#49904d85] hover:cursor-pointer'>
      <div>
        {tag && (
          <label className='absolute top-3 right-2 bg-[#49904d85] text-white px-2 py-1 text-xs rounded-lg'>
            {tag}
          </label>
        )}
        <img className='rounded-lg' src={image} alt={name} />
      </div>
      <div className='p-2'>
        <h5 className='mb-2 text-md font-bold tracking-tight text-gray-900'>
          {name}
        </h5>
        <p className='mb-6 text-xs text-gray-700'>{description}</p>
        <div className='flex flex-wrap justify-between items-center'>
          <span className='text-gray-800 text-xs fixed bottom-0 pb-3'>🗓️ <span >{date}</span></span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  tag: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Card;
