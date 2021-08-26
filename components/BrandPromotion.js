import React, { useState } from 'react';

import CarouselTitle from './common/CarouselTitle';
import BrandPromotionCard from './BrandPromotionCard';
import ArrowLeft from './common/ArrowLeft';
import ArrowRight from './common/ArrowRight';
const BrandPromotion = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const prev = () => {
    setSlideIndex(prev => prev - 1);
  };
  const next = () => {
    setSlideIndex(prev => prev + 1);

    if (slideIndex === 3) {
      setSlideIndex(0);
    }
  };
  return (
    <section className="min-w-5-xl py-5 relative max-w-7xl px-6 mx-auto">
      <CarouselTitle
        title="品牌推廣"
        children={
          <span className="text-sm text-white bg-gray-400 rounded-full h-5 w-5 inline-flex items-center justify-center">
            ？
          </span>
        }
        current={slideIndex}
        length={3}
      />
      <div className="overflow-hidden ">
        <ul
          className="flex space-x-2 h-auto w-full transition-all duration-500"
          style={{ transform: `translateX(${slideIndex * -100}%)` }}
        >
          <BrandPromotionCard
            label={true}
            flagShip={true}
            follow="30,447"
            rate="5.0"
            brand="SU:MI said"
            brandLogo="//cdn02.pinkoi.com/store/sumi/logo/3/150x150.jpg"
            img1="//cdn02.pinkoi.com/product/3wiX9A9S/0/220x220.jpg"
            img2="//cdn01.pinkoi.com/product/n7UQVwgh/0/160x160.jpg"
            img3="//cdn01.pinkoi.com/product/xBfWBCpr/0/160x160.jpg"
          />
          <BrandPromotionCard
            follow="9,491"
            rate="5.0"
            brand="立格扉 Ligfe"
            brandLogo="//cdn01.pinkoi.com/store/ligfe/logo/1/150x150.jpg"
            img1="//cdn02.pinkoi.com/product/mZhNtVYm/0/220x220.jpg"
            img2="//cdn01.pinkoi.com/product/3dMeWvMt/0/160x160.jpg"
            img3="//cdn01.pinkoi.com/product/8w8P4CUD/0/160x160.jpg"
          />
          <BrandPromotionCard
            follow="4,527"
            label={true}
            rate="5.0"
            brand="山本口金店"
            brandLogo="//cdn02.pinkoi.com/store/shika1811/logo/2/150x150.jpg"
            img1="//cdn01.pinkoi.com/product/zVrTiDqB/0/220x220.jpg"
            img2="//cdn02.pinkoi.com/product/LHpBTPaU/0/160x160.jpg"
            img3="//cdn01.pinkoi.com/product/C7hSDSRY/0/160x160.jpg"
          />
          <BrandPromotionCard />
          <BrandPromotionCard />
          <BrandPromotionCard />
        </ul>
      </div>
      {/* arrow left */}
      <ArrowLeft prev={prev} />
      <ArrowRight next={next} />
      {/* arrow right */}
    </section>
  );
};

export default BrandPromotion;
