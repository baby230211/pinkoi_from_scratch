import Image from 'next/image';
import { useEffect, useState } from 'react';

const Carousel = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      uri: 'https://cdn04.pinkoi.com/pinkoi.site/clickables/themecard/1593492691_nveP7r.jpg',
    },
    {
      id: 2,
      uri: 'https://cdn04.pinkoi.com/pinkoi.site/clickables/engagement/1530770854_5CjKA9.jpg',
    },
    {
      id: 3,
      uri: 'https://cdn04.pinkoi.com/pinkoi.site/clickables/themecard/1593492691_nveP7r.jpg',
    },
    {
      id: 4,
      uri: 'https://cdn04.pinkoi.com/pinkoi.site/clickables/engagement/1530770854_5CjKA9.jpg',
    },
  ]);
  // useEffect(() => {
  //   const slider = document.querySelector('.slider');
  //   let isDown = false;
  //   let startX;
  //   let scrollLeft;
  //   slider.addEventListener('mousedown', e => {
  //     isDown = true;
  //     startX = e.pageX - slider.offsetLeft;
  //     scrollLeft = slider.scrollLeft;
  //   });
  //   slider.addEventListener('mouseleave', () => {
  //     isDown = false;
  //   });
  //   slider.addEventListener('mouseup', () => {
  //     isDown = false;
  //   });

  //   slider.addEventListener('mousemove', e => {
  //     if (!isDown) return;
  //     e.preventDefault();
  //     const x = e.pageX - slider.offsetLeft;
  //     const walk = x - startX;
  //     slider.scrollLeft = scrollLeft - walk;
  //   });
  //   return () => {
  //     slider.removeEventListener('mousedown', e => {
  //       isDown = true;
  //       startX = e.pageX - slider.offsetLeft;
  //       scrollLeft = slider.scrollLeft;
  //     });
  //     slider.removeEventListener('mouseleave', () => {
  //       isDown = false;
  //     });
  //     slider.removeEventListener('mouseup', () => {
  //       isDown = false;
  //     });
  //     slider.removeEventListener('mousemove', e => {
  //       if (!isDown) return;
  //       e.preventDefault();
  //       const x = e.pageX - slider.offsetLeft;
  //       const walk = x - startX;
  //       slider.scrollLeft = scrollLeft - walk;
  //     });
  //   };
  // });
  const handleClick = () => {
    setImages(prevState => {
      let last = prevState.pop();
      return [last, ...prevState];
    });
  };
  return (
    <section className="slider min-w-5-xl flex overflow-x-scroll overflow  mt-10 py-5 bg-gray-400 relative transform ">
      {images.map(image => (
        <div
          key={image.id}
          className="relative flex min-w-5-xl h-28 -translate-x-3/4 transition-all"
        >
          <Image src={image.uri} layout="fill" objectFit="cover" />
        </div>
      ))}

      <div
        className="absolute top-1/2 -translate-y-1/2  right-3 bg-white rounded-full p-2  motion-safe:hover:scale-125 "
        onClick={handleClick}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          className="icon--arrow-right"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 10.825L7.709 7 4 3.175 5.142 2 10 7l-4.858 5L4 10.825z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Carousel;
