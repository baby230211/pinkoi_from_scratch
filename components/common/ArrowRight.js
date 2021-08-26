import React from 'react';

const ArrowRight = ({ next }) => {
  return (
    <div
      className="absolute  top-1/2  right-6 translate-x-1/2 -translate-y-full  rounded-full bg-gray-50 bg-opacity-80 w-10 h-10 inline-flex items-center justify-center cursor-pointer hover:scale-150"
      onClick={next}
    >
      <svg
        className="w-5 h-5 font-bold"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        class="icon--arrow-right"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 10.825L7.709 7 4 3.175 5.142 2 10 7l-4.858 5L4 10.825z"></path>
      </svg>
    </div>
  );
};

export default ArrowRight;
