import React from 'react';
import Image from 'next/image';
const Engagement = () => {
  return (
    <section className="min-w-5-xl relative bg-gray-400 mt-10  py-5 ">
      <div className="w-full flex space-x-2 justify-between relative max-w-7xl mx-auto px-6">
        {Array.from({ length: 2 }).map(item => (
          <div className="flex-1 flex p-4  bg-white">
            <div className="relative w-1/3">
              <img
                className="w-full object-cover"
                src="https://cdn04.pinkoi.com/pinkoi.site/clickables/engagement/1530770854_5CjKA9.jpg"
                alt=""
              />
            </div>
            <div className="px-5 w-2/3 ">
              <h2 className="text-base my-2">絕美夏裝上架</h2>
              <p className="text-sm mb-24">
                一件懶人夏裝 #背心 #洋裝 #短裙 #復古連身泳衣
                已經都上架完成（一鞠躬），一起來幫衣櫃換季吧！
              </p>
              <button className="bg-blue-900 text-white py-2 px-3 rounded absolute top-36">
                立即逛
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Engagement;
