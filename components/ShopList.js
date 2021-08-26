import React, { useState } from 'react';
import ArrowLeft from './common/ArrowLeft';
import ArrowRight from './common/ArrowRight';
import CarouselTitle from './common/CarouselTitle';
import ShopCard from './ShopCard';
const ShopList = ({ title, more = false }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = 3;
  const nextHandler = () => {
    console.log(`next`);
    if (slideIndex === 2) {
      setSlideIndex(0);
      return;
    }
    setSlideIndex(prev => prev + 1);
  };
  const prevHandler = () => {
    console.log(`prev`);
    if (slideIndex === 0) {
      setSlideIndex(2);
      return;
    }
    setSlideIndex(prev => prev - 1);
  };
  return (
    <section className="min-w-5-xl py-5 px-6 relative max-w-7xl mx-auto ">
      <CarouselTitle
        title={title}
        current={slideIndex}
        length={length}
        children={
          more && (
            <a className="text-blue-400 hover:underline cursor-pointer text-sm ml-2 flex items-center">
              看更多
            </a>
          )
        }
      />

      <div className="overflow-x-hidden overflow-y-hidden relative">
        <ul
          className="flex h-auto transition-all duration-500 space-x-2"
          style={{ transform: `translateX(${slideIndex * -100}%)` }}
        >
          <ShopCard
            img="//cdn01.pinkoi.com/product/YHmbsbj6/0/1/220x220.jpg"
            product="KURASU × WHOSMiNG 限定配方豆 2.0 濾掛包"
            factory="WHOSMiNG"
            price={`1,180`}
            revisedPrice={`1,062`}
            hot={false}
            discount={true}
            noFee={true}
          />
          <ShopCard
            img="//cdn01.pinkoi.com/product/tZBeYuhg/0/1/220x220.jpg"
            product="PARTY FOR EARS |日系簡約藍圓花 軟陶耳環 S925純銀耳針耳夾"
            factory="PARTY FOR EARS"
            price={`785`}
            hot={false}
            discount={false}
            noFee={true}
          />
          <ShopCard
            img="//cdn01.pinkoi.com/product/EZK9TKEX/0/2/220x220.jpg"
            product="MUDLAB 【 原創設計 富士山水泥擴香座 / 線香器 2.0版  】"
            factory="MUDLAB 泥社"
            price={`1,600`}
            hot={false}
            discount={true}
            noFee={false}
          />
          <ShopCard
            img="//cdn01.pinkoi.com/product/UBB5Dtwx/0/1/220x220.jpg"
            product="香港品牌 GOODWORK好活 簡約輕巧防水斜背包 - 深藍色"
            factory="number life"
            price={`709`}
            hot={false}
            discount={true}
            noFee={true}
          />
          <ShopCard
            img="//cdn01.pinkoi.com/product/haTr5bqD/0/1/220x220.jpg"
            product="【荷蘭店限定香氛】Carroll&Chan鬱金香200ml藤枝香薰及蜂蠟蠟燭"
            factory="The Candle Company"
            price={`2,695`}
            hot={false}
            discount={false}
            noFee={false}
          />
          <ShopCard
            img="//cdn01.pinkoi.com/product/wwMTLxfZ/0/6/220x220.jpg"
            product="手工橄欖木香料大蒜研磨器"
            factory="Folksy Finds"
            price={`619`}
            hot={true}
            discount={true}
            noFee={false}
          />
        </ul>
      </div>
      <ArrowRight next={nextHandler} />
      <ArrowLeft prev={prevHandler} />
    </section>
  );
};

export default ShopList;
