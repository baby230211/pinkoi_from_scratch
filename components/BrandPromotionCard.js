import React from 'react';
import Flag from './icons/Flag';
import Star from './icons/Star';
import Follow from './icons/Follow.js';
const BrandPromotionCard = ({
  label,
  follow,
  rate,
  brand,
  img1,
  img2,
  img3,
  flagShip,
  brandLogo,
}) => {
  return (
    <li
      className="flex flex-shrink-0 flex-col border box-border"
      style={{ width: 'calc(100%/3 - 8px)' }}
    >
      {/* img section */}
      <div className="flex space-x-1 w-full relative">
        {/* left */}
        <div className="w-2/3">
          <img
            className="w-full h-full hover:opacity-80 cursor-pointer"
            src={img1}
            alt=""
          />
        </div>
        {/* right */}
        <div className="w-1/3 flex flex-col space-y-1">
          <img
            className="w-full h-full object-fill hover:opacity-80 cursor-pointer"
            src={img2}
            alt=""
          />
          <img
            className="w-full h-full object-fill hover:opacity-80 cursor-pointer"
            src={img3}
            alt=""
          />
        </div>
        {/* label */}
        {label && (
          <div
            className="space-x-1 absolute left-0 top-0 inline-flex items-center justify-center p-1 px-2  text-white bg-red-400"
            style={{ margin: 0 }}
          >
            <svg
              className="w-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.62 4.516c1.334-2.563 3.68-4.078 5.525-3.322 1.972.807 2.407 3.814 1.138 6.7a8.785 8.785 0 0 1-1.17 1.945 7.282 7.282 0 0 1-.936.972l.107-1.475.06-.074a7.784 7.784 0 0 0 1.043-1.735c1.086-2.468.732-4.908-.625-5.464-1.242-.508-3.076.663-4.211 2.758l2.379.78c.716.235 1.237.984 1.193 1.717l-.351 5.836c-.025.407-.298.872-.647 1.101L7.626 22.44a.99.99 0 0 1-1.351-.252L.166 13.396a.927.927 0 0 1 .265-1.31L12.93 3.901c.35-.229.896-.3 1.294-.17l2.396.785zm-.966 3.353c.048-.792.236-1.64.57-2.485l-2.315-.758a.657.657 0 0 0-.436.056L.975 12.866l6.108 8.792 12.499-8.185a.62.62 0 0 0 .217-.37l.351-5.836c.019-.309-.234-.673-.536-.772l-2.468-.808a7.308 7.308 0 0 0-.516 2.168c.333.099.634.304.843.606.488.701.294 1.655-.432 2.13-.725.475-1.709.292-2.196-.409-.488-.701-.294-1.655.432-2.131.12-.078.246-.139.377-.182zm0 .789a.812.812 0 0 0-.203 1.127.848.848 0 0 0 .517.342 4.774 4.774 0 0 1-.314-1.469zm.974-.029c.03.424.113.81.244 1.142a.806.806 0 0 0-.244-1.142zM5.665 14.035a1.34 1.34 0 0 1-.246-1.151c.096-.419.337-.746.723-.982a1.816 1.816 0 0 1 1.277-.239c.465.076.828.288 1.088.637.252.338.333.717.242 1.137-.092.42-.333.749-.725.988a1.799 1.799 0 0 1-1.284.238c-.464-.08-.823-.289-1.075-.628zm1.898-2.999l2.477-1.513.699 7.844-.715.436-.579-7.001-1.412.862-.47-.628zM6.38 13.599a.808.808 0 0 0 .539.316.895.895 0 0 0 .636-.119.743.743 0 0 0 .364-.492.68.68 0 0 0-.127-.568.82.82 0 0 0-.545-.323.895.895 0 0 0-.636.118.746.746 0 0 0-.359.49.678.678 0 0 0 .128.578zm5.186 1.424a1.33 1.33 0 0 1-.241-1.144c.097-.419.338-.746.723-.981.386-.236.81-.315 1.273-.237.463.077.822.288 1.078.631.257.344.34.724.252 1.142-.089.418-.329.747-.72.986-.392.239-.82.319-1.284.238-.465-.08-.825-.292-1.081-.635zm.706-.431a.828.828 0 0 0 .542.319.896.896 0 0 0 .648-.12.74.74 0 0 0 .356-.493.681.681 0 0 0-.125-.574.81.81 0 0 0-.539-.316.894.894 0 0 0-.636.118.764.764 0 0 0-.364.492.662.662 0 0 0 .118.574z"
                fill="#FFFFFF"
              ></path>
            </svg>
            <span>品牌活動進行中</span>
          </div>
        )}
      </div>
      <div className="flex">
        <div className=" flex items-center justify-between w-full">
          <div className="inline-flex items-center space-x-4 w-2/3 py-4 pl-3 ">
            <a href="" className=" flex-shrink-0 block w-16 h-16">
              <img className="" src={brandLogo} alt="" />
            </a>
            <div className="space-y-1 flex-auto overflow-hidden">
              <p class="flex items-center space-x-2">
                {flagShip && <Flag />}
                <a href="" className="font-semibold text-lg">
                  {brand}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Star />
                <span>評價 {rate}</span>
              </p>
              <p className="flex items-center space-x-2 ">
                <Follow />
                <span className="truncate">關注人數 {follow}</span>
              </p>
            </div>
          </div>

          <div className="w-1/3">
            <button className="border rounded-md px-4 py-1 border-gray-800 text-lg transition-all duration-200 hover:bg-gray-50 ">
              即刻探索
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BrandPromotionCard;
