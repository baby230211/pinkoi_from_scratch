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
  ]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [length, setLength] = useState(images.length);
  const [touchPosition, setTouchPosition] = useState(null);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [left, setLeft] = useState(false);
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

  const next = () => {
    if (transitioning) return;
    if (slideIndex < 2) {
      setSlideIndex(prev => prev + 1);

      setTransitioning(true);
    } else {
      setSlideIndex(0);
    }
  };
  useEffect(() => {
    console.log(`effect`);
    if (slideIndex === 0 || slideIndex === 2) {
      setTransitionEnabled(true);
    }
  }, [slideIndex, length]);
  const handleTransitionEnd = e => {
    if (!(slideIndex < 2)) {
      console.log(`here`);
      setTransitionEnabled(false);
      setLeft(true);
    }
    if (slideIndex === 0) {
      setLeft(false);
    }

    setTransitioning(false);
  };
  const prev = () => {
    if (slideIndex > 0) {
      setSlideIndex(prevState => prevState - 1);
    }
  };
  console.log(slideIndex);
  return (
    <div className="min-w-70vw max-w-70vw mx-auto w-full flex flex-col relative overflow-x-hidden">
      <button
        onClick={prev}
        className={` left-6 absolute z-10 top-1/2 w-12 h-12 rounded-3xl bg-gray-200 -translate-y-1/2   `}
      >
        &lt;
      </button>
      <ul
        className="flex relative transition-all duration-1000"
        style={{
          width: '9999em',
          left: !transitionEnabled ? `100%` : `${slideIndex * 100 * -1}%`,
          transition: !transitionEnabled ? 'none' : null,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <li className="min-w-70vw max-w-70vw flex justify-center">
          <img src={images[0].uri} alt="" />
        </li>
        <li className="min-w-70vw max-w-70vw flex justify-center">
          <img src={images[1].uri} alt="" />
        </li>
        <li
          className="min-w-70vw max-w-70vw flex justify-center"
          style={{
            position: !left ? 'null' : 'relative',
            left: !left ? 0 : '-210vw',
          }}
        >
          <img src={images[2].uri} alt="" />
        </li>
      </ul>
      <button
        onClick={next}
        className="right-72 absolute z-10 top-1/2 w-12 h-12 rounded-3xl bg-gray-200 -translate-y-1/2   "
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
