import React from 'react';

const CarouselTitle = ({ title, children, length, current }) => {
  return (
    <div className="h-12">
      <h1 className="text-2xl text-gray-500 inline-flex justify-between items-center w-full">
        <div className="inline-flex items-center space-x-2">
          <span>{title}</span>
          {children}
        </div>
        {!isNaN(current) && (
          <div className="text-sm tracking-wider">
            {current + 1} / {length}
          </div>
        )}
      </h1>
    </div>
  );
};

export default CarouselTitle;
