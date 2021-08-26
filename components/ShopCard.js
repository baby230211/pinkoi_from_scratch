import React from 'react';

const ShopCard = ({
  factory,
  img,
  product,
  hot,
  discount,
  noFee,
  price,
  revisedPrice,
}) => {
  return (
    <li
      style={{
        width: 'calc(16.666667% )',
        maxWidth: 'calc(16.666667% )',
      }}
    >
      <a className="block cursor-pointer group" title={product}>
        <div className="relative w-full">
          <img className="w-full group-hover:opacity-50 " src={img} alt="" />
          <span class="hidden group-hover:block absolute right-2 bottom-2">
            <svg
              className="w-6 h-6 text-white fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 20.75c-.17 0-.339-.058-.478-.172-.247-.204-6.068-5.031-8.377-8.144-1.748-2.693-1.549-5.853.456-7.722C4.612 3.77 5.952 3.25 7.374 3.25c1.153 0 2.293.347 3.208.978.651.448 1.103.952 1.417 1.432.315-.48.767-.984 1.418-1.432.915-.631 2.055-.978 3.209-.978 1.421 0 2.761.52 3.772 1.462 2.005 1.868 2.204 5.027.482 7.683-2.334 3.152-8.155 7.979-8.402 8.183-.139.114-.308.172-.478.172zm-4.626-16c-1.041 0-2.018.376-2.75 1.059-1.464 1.364-1.565 3.737-.247 5.77 1.808 2.436 6.172 6.211 7.623 7.442 1.451-1.231 5.819-5.013 7.648-7.48 1.292-1.996 1.191-4.369-.272-5.731-.733-.684-1.71-1.06-2.75-1.06-.854 0-1.69.253-2.357.713-1.23.846-1.451 1.933-1.534 2.343-.071.349-.378.6-.734.6H12c-.356 0-.663-.25-.734-.599-.084-.41-.308-1.499-1.535-2.344-.667-.46-1.504-.713-2.357-.713z"></path>
            </svg>
          </span>
          <span class="opacity-30 hover:opacity-100 hidden group-hover:block absolute right-2 bottom-2 z-10">
            <svg
              className="w-6 h-6 fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="icon--heart-solid"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.374 4.75a4.008 4.008 0 0 0-2.75 1.059c-1.464 1.364-1.565 3.737-.247 5.77 1.808 2.436 6.172 6.211 7.623 7.442 1.451-1.231 5.819-5.013 7.648-7.48 1.292-1.996 1.191-4.369-.272-5.731a4.007 4.007 0 0 0-2.75-1.06 4.18 4.18 0 0 0-2.357.713c-1.23.846-1.451 1.933-1.534 2.343a.75.75 0 0 1-.734.6H12a.748.748 0 0 1-.734-.599 3.543 3.543 0 0 0-1.535-2.344 4.182 4.182 0 0 0-2.357-.713"></path>
            </svg>
          </span>

          {/* 免運or discount */}
          <div className="  absolute top-0 left-0 inline-flex text-xs">
            {noFee && (
              <div className="px-2 py-1 bg-blue-500 shadow-3xl text-white">
                免運
              </div>
            )}
            {discount && (
              <div className="px-2 py-1 bg-pink-400 shadow-3xl text-white">
                55折
              </div>
            )}
          </div>
        </div>
        <div
          className="group h-12 mt-2 line-indent "

          // onMouseEnter={() => console.log('mouseEnter')}
          // onMouseOut={() => console.log('mouseOut')}
        >
          {hot && (
            <span className="bg-pink-300 px-2 opacity-80 text-red-700 ">
              Hot
            </span>
          )}
          <span>{product}</span>
        </div>
      </a>

      <a
        className="my-3 block hover:underline  text-gray-400 cursor-pointer"
        title={factory}
      >
        {factory}
      </a>
      <div>
        {(revisedPrice && (
          <span>
            NT$ {revisedPrice}{' '}
            <span className="text-gray-400 line-through">NT$ {price}</span>
          </span>
        )) || <span>NT$ {price}</span>}
      </div>
    </li>
  );
};

export default ShopCard;
