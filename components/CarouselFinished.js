import Image from 'next/image';
import { useEffect, useState } from 'react';

const Carousel = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      uri: 'http://fakeimg.pl/440x300/?text=1',
    },
    {
      id: 2,
      uri: 'http://fakeimg.pl/440x300/?text=2',
    },
    {
      id: 3,
      uri: 'http://fakeimg.pl/440x300/?text=3',
    },
    {
      id: 4,
      uri: 'http://fakeimg.pl/440x300/?text=4',
    },
  ]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [length, setLength] = useState(images.length);
  const [touchPosition, setTouchPosition] = useState(null);
  const [isRepeating, setIsRepeating] = useState(true);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const handleTouchMove = e => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };
  const handleTouchStart = e => {
    console.log(e);
    const touchDown = e.touches[0].clientX;
    console.log(touchDown);
    setTouchPosition(touchDown);
  };
  useEffect(() => {
    setLength(images.length);
  }, [images]);

  const renderFirstFake = () => {
    const first2Fake = images.slice(0, 2);
    const fake = first2Fake.map(image => (
      <li className="flex-grow flex-shrink-0 w-1/2 px-4" key={image.id}>
        <img
          className="flex-grow flex-shrink-0 w-full mx-auto"
          src={image.uri}
        ></img>
      </li>
    ));
    return fake;
  };
  const renderLastFake = () => {
    const lastFake = images.slice(-2);
    const fake = lastFake.map(image => (
      <li className="flex-grow flex-shrink-0 w-1/2 px-4" key={image.id}>
        <img
          className="flex-grow flex-shrink-0 w-full mx-auto"
          src={image.uri}
        ></img>
      </li>
    ));
    return fake;
  };
  const next = () => {
    if (transitioning) return;
    setSlideIndex(prev => prev + 1);
    setTransitioning(true);
  };
  const prev = () => {
    if (transitioning) return;
    setSlideIndex(prev => prev - 1);
    setTransitioning(true);
  };
  useEffect(() => {
    if (isRepeating) {
      if (slideIndex === 0 || slideIndex === length - 1) {
        setTransitionEnabled(true);
      }
    }
  }, [slideIndex, length, isRepeating]);
  const handleTransitionEnd = e => {
    if (!(slideIndex < 4)) {
      console.log(`here`);
      setTransitionEnabled(false);
      setSlideIndex(0);
    }
    if (slideIndex < 0) {
      console.log(`run here`);
      setTransitionEnabled(false);
      setSlideIndex(length - 1);
    }
    setTransitioning(false);
  };
  console.log(slideIndex);
  console.log(transitionEnabled);
  return (
    <div className="mx-auto w-full min-w-5-xl flex flex-col relative">
      <button
        onClick={prev}
        className={` left-1/4  absolute z-10 top-1/2 w-12 h-20 text-3xl font-medium rounded-l-lg  bg-gray-50 -translate-y-1/2 -translate-x-8 shadow-lg`}
      >
        &lt;
      </button>
      <div className="w-full flex relative">
        <div
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          className="w-full overflow-x-hidden h-full"
        >
          <ul
            className=" flex transition-transform duration-500"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(${-slideIndex * 50 - 75}%)`,
              transition: !transitionEnabled ? 'none' : undefined,
            }}
          >
            {renderLastFake()}
            {images.map(image => (
              <li className="flex-grow flex-shrink-0 w-1/2 px-4" key={image.id}>
                <img
                  className="flex-grow flex-shrink-0 w-full"
                  src={image.uri}
                ></img>
              </li>
            ))}
            {renderFirstFake()}
          </ul>
        </div>
      </div>
      <button
        onClick={next}
        className="right-1/4  absolute z-10 top-1/2 w-12 h-20 text-3xl font-medium rounded-r-lg  bg-gray-50 -translate-y-1/2 translate-x-8 shadow-lg"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
