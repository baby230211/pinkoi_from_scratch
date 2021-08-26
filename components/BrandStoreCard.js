import React from 'react';

const BrandStoreCard = ({ brandName, brandImg }) => {
  return (
    <li
      className="group cursor-pointer"
      style={{ minWidth: 'calc(100%/7 - 16px' }}
    >
      <div className="mb-4 w-full">
        <img
          className="w-full group-hover:opacity-80 cursor-pointer object-fill"
          src={brandImg}
          alt=""
        />
      </div>
      <span className="w-full inline-block text-center truncate text-2xl tracking-wider">
        {brandName}
      </span>
    </li>
  );
};

export default BrandStoreCard;
