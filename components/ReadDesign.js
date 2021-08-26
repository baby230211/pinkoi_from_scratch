import React from 'react';
import Image from 'next/image';
import CarouselTitle from './common/CarouselTitle';
const ReadDesign = () => {
  return (
    <section className="min-w-5-xl flex flex-wrap mt-10 py-5 px-6 relative max-w-7xl mx-auto">
      <CarouselTitle
        title="閱讀好設計"
        children={
          <a className="text-blue-300 text-xs ml-2 flex items-center">看更多</a>
        }
      />

      <div className="w-full flex space-x-4 ">
        {Array.from({ length: 3 }).map(item => (
          <div className="w-1/3 ">
            <div className="relative w-full h-48 mx-auto">
              <Image
                src="https://cdn04.pinkoi.com/pinkoi.site/clickables/themecard/1593492691_nveP7r.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h5 className="text-sm mt-2">
              一人吃飯怎麼煮？網紅教你 15 分鐘上菜！3
              道「一人份」簡單韓式食譜（詳細影片步驟）
            </h5>
            <p className="text-xs mt-2">
              一個人在家吃飯，總覺得煮飯很麻煩？編輯邀請了人氣料理頻道 EAT AT
              HOME 食·家 的創辦人 Karen
              Lee，談談一個人煮飯的二三事，了解「一人餐桌」的生活態度！
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReadDesign;
