import React, { useState } from 'react';
import CarouselTitle from './common/CarouselTitle';
import Flag from './icons/Flag';
import BrandStoreCard from './BrandStoreCard';
import ArrowLeft from './common/ArrowLeft';
import ArrowRight from './common/ArrowRight';
const BrandStore = () => {
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
    <section className="min-w-5-xl py-5 relative max-w-7xl mx-auto">
      <div className="px-6">
        <CarouselTitle
          title="品牌旗艦館"
          children={
            <>
              <Flag />
              <a className="text-blue-400 text-sm ml-2 flex items-center">
                看全部
              </a>
            </>
          }
          length={3}
          current={slideIndex}
        />
      </div>

      <div className="relative px-6">
        <div className="overflow-hidden">
          <ul
            className="flex space-x-4 h-auto w-full transition-all duration-500"
            style={{ transform: `translateX(${slideIndex * -100}%)` }}
          >
            <BrandStoreCard
              brandName="好玻 GOODGLAS"
              brandImg="//cdn01.pinkoi.com/store/redliuli/logo/3/300x300.jpg"
            />
            <BrandStoreCard
              brandName="台電文創"
              brandImg="//cdn01.pinkoi.com/store/tpcreative/logo/2/300x300.jpg"
            />
            <BrandStoreCard
              brandName="NORITAKE"
              brandImg="//cdn02.pinkoi.com/store/noritake/logo/1/300x300.jpg"
            />
            <BrandStoreCard
              brandName="小草 作 Grassphere"
              brandImg="//cdn01.pinkoi.com/store/grassphere/logo/6/300x300.jpg"
            />
            <BrandStoreCard
              brandName="綠藤生機Greenvines"
              brandImg="//cdn02.pinkoi.com/store/greenvines/logo/2/300x300.jpg"
            />
            <BrandStoreCard
              brandName="林百貨"
              brandImg="//cdn01.pinkoi.com/store/focusin/logo/1/300x300.jpg"
            />
            <BrandStoreCard
              brandName="茶籽堂 chatzutang"
              brandImg="//cdn01.pinkoi.com/store/chatzutang/logo/1/300x300.jpg"
            />
            <BrandStoreCard
              brandName="茶籽堂 chatzutang"
              brandImg="//cdn01.pinkoi.com/store/chatzutang/logo/1/300x300.jpg"
            />
            <BrandStoreCard
              brandName="茶籽堂 chatzutang"
              brandImg="//cdn01.pinkoi.com/store/chatzutang/logo/1/300x300.jpg"
            />
          </ul>
          {/* arrow left */}
          <ArrowLeft prev={prev} />
          <ArrowRight next={next} />
          {/* arrow right */}
        </div>
      </div>
    </section>
  );
};

export default BrandStore;
