import React, { useState } from 'react';
import Shop2Card from './Shop2Card';
import ArrowLeft from './common/ArrowLeft';
import ArrowRight from './common/ArrowRight';
const ShopList2 = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const next = () => {
    console.log(`next`);
    if (slideIndex === 3) {
      setSlideIndex(0);
    }
    setSlideIndex(prev => prev + 1);
  };
  const prev = () => {
    console.log(`prev`);
    if (slideIndex === 0) {
      setSlideIndex(3);
    }
    setSlideIndex(prev => prev - 1);
  };
  return (
    <section className="min-w-5-xl py-5 px-6 relative max-w-7xl mx-auto">
      <div>
        {/* title */}
        <div>
          <h2>美日新興</h2>
        </div>
        <div>
          {/* scroll container */}

          <div className=" overflow-hidden relative">
            <ul
              className="flex transition-all duration-500"
              style={{ transform: `translateX(${slideIndex * -100}%)` }}
            >
              <Shop2Card title="Common Zense Art" />
              <Shop2Card title="Common Zense Art" />
              <Shop2Card title="Common Zense Art" />
              <Shop2Card title="endless-holiday" />
              <Shop2Card title="endless-holiday" />
              <Shop2Card title="endless-holiday" />
              <Shop2Card title="Common Zense Art" />
              <Shop2Card title="Common Zense Art" />
              <Shop2Card title="Common Zense Art" />
              <Shop2Card title="endless-holiday" />
              <Shop2Card title="endless-holiday" />
              <Shop2Card title="endless-holiday" />
            </ul>
          </div>

          {/* arrow left */}
          <ArrowLeft prev={prev} />
          <ArrowRight next={next} />
          {/* arrow right */}
        </div>
      </div>
    </section>
  );
};

export default ShopList2;
