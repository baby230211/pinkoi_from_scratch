import React from 'react';

const ArrowLeft = ({ prev }) => {
  return (
    <div
      className="absolute  top-1/2   left-6 -translate-x-1/2 -translate-y-full  rounded-full bg-gray-50 bg-opacity-80 w-10 h-10 inline-flex items-center justify-center cursor-pointer hover:scale-150"
      onClick={prev}
    >
      <svg
        className="w-5 h-5 font-bold"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        class="icon--arrow-right"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 10.825L6.291 7 10 3.175 8.858 2 4 7l4.858 5L10 10.825z"></path>
      </svg>
    </div>
  );
};

export default ArrowLeft;
