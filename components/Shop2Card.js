import React from 'react';

const Shop2Card = ({ title }) => {
  return (
    <li
      className="mr-1 flex-shrink-0 flex-grow-0 border box-border "
      style={{
        width: 'calc(33.33333% - 4px )',
      }}
    >
      <a>
        <div className="flex">
          {/* left img */}
          <div className=" w-4/6">
            <img
              className="w-full object-cover"
              src="//cdn01.pinkoi.com/product/ujc4yiv7/0/220x220.jpg"
              alt=""
            />
          </div>
          {/* right img */}
          <div className="flex flex-col flex-1 px-1">
            <img
              className="w-full h-full object-cover"
              src="//cdn01.pinkoi.com/product/wgJwdztM/0/160x160.jpg"
              alt=""
            />
            <img
              className="pt-1 w-full h-full object-cover"
              src="//cdn01.pinkoi.com/product/gqYVbBBY/0/160x160.jpg"
              alt=""
            />
          </div>
        </div>
      </a>
      {/* content */}
      <div className="py-3 px-4 inline-flex items-center justify-between w-full">
        <div>
          <h3 className="font-medium  text-xl">{title}</h3>
          <span class="recommend">
            <div class="m-review-info g-flexbox align-center">
              <div class="inline-flex items-center justify-center space-x-3 mt-2">
                <div class="inline-flex items-center justify-center mr-2">
                  <span>
                    <svg
                      className="w-6"
                      viewBox="0 0 44 44"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="color"
                        d="M13 40c-2 1-3 0-3-3l2-10-7-7c-2-2-1-3 1-4l10-1 4-9c1-3 3-3 4 0l4 9 10 1c2 1 3 2 1 4l-7 7 2 10c0 3-1 4-3 3l-9-5-9 5z"
                        fill="#F16C5D"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      className="w-6"
                      viewBox="0 0 44 44"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="color"
                        d="M13 40c-2 1-3 0-3-3l2-10-7-7c-2-2-1-3 1-4l10-1 4-9c1-3 3-3 4 0l4 9 10 1c2 1 3 2 1 4l-7 7 2 10c0 3-1 4-3 3l-9-5-9 5z"
                        fill="#F16C5D"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      className="w-6"
                      viewBox="0 0 44 44"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="color"
                        d="M13 40c-2 1-3 0-3-3l2-10-7-7c-2-2-1-3 1-4l10-1 4-9c1-3 3-3 4 0l4 9 10 1c2 1 3 2 1 4l-7 7 2 10c0 3-1 4-3 3l-9-5-9 5z"
                        fill="#F16C5D"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      className="w-6"
                      viewBox="0 0 44 44"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="color"
                        d="M13 40c-2 1-3 0-3-3l2-10-7-7c-2-2-1-3 1-4l10-1 4-9c1-3 3-3 4 0l4 9 10 1c2 1 3 2 1 4l-7 7 2 10c0 3-1 4-3 3l-9-5-9 5z"
                        fill="#F16C5D"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      className="w-6"
                      viewBox="0 0 44 44"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="color"
                        d="M13 40c-2 1-3 0-3-3l2-10-7-7c-2-2-1-3 1-4l10-1 4-9c1-3 3-3 4 0l4 9 10 1c2 1 3 2 1 4l-7 7 2 10c0 3-1 4-3 3l-9-5-9 5z"
                        fill="#F16C5D"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="m-review-info__score">5</div>
                <div class="m-review-info__total">(1)</div>
              </div>
            </div>
          </span>
        </div>
        <button className="px-3 py-1 rounded-md  inline-flex justify-center items-center space-x-1 text-white bg-blue-600">
          <i>
            <svg
              className="h-5 "
              width="20"
              height="20"
              style={{ fill: '#fff' }}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.6,8.6 L8.6,3 L11.4,3 L11.4,8.6 L17,8.6 L17,11.4 L11.4,11.4 L11.4,17 L8.6,17 L8.6,11.4 L3,11.4 L3,8.6 L8.6,8.6 Z"></path>
            </svg>
          </i>
          <span>關注</span>
        </button>
      </div>
    </li>
  );
};

export default Shop2Card;
