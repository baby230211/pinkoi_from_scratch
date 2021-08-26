import Head from 'next/head';
import Image from 'next/image';
import BrandPromotion from '../components/BrandPromotion';
import BrandStore from '../components/BrandStore';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CarouselFinished from '../components/CarouselFinished';
import ShopList from '../components/ShopList';
import ShopList2 from '../components/ShopList2';
import ReadDesign from '../components/ReadDesign';
import Engagement from '../components/Engagement';
export default function Home() {
  return (
    <>
      <NavBar />

      <CarouselFinished />
      <ShopList title="編輯嚴選" />
      <BrandPromotion />
      <BrandStore />
      <ShopList title="最近熱門" more={true} />
      <ReadDesign />
      <Engagement />

      {/* Banner */}
      <ShopList title="新品上架" />
      <ShopList2 />
      <ShopList title="免運專區" more={true} />
      <ShopList title="更多優惠" more={true} />
      <section className="min-w-5-xl flex bg-gray-400 mt-10 px-20">
        <div className="w-full flex justify-around ">
          <div className="w-72 text-center py-10">
            <div className="relative w-48 h-28 mx-auto">
              <Image
                src="https://cdn04.pinkoi.com/pinkoi.site/home/core_values/TW/2_v3.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h4 className="mt-4 text-base">集結全球好設計</h4>
            <p className="mt-4 text-sm">
              販售超過百萬件獨特商品，透過好設計實現心中的理想生活
            </p>
          </div>
          <div className="w-72 text-center py-10">
            <div className="relative w-48 h-28 mx-auto">
              <Image
                src="https://cdn04.pinkoi.com/pinkoi.site/home/core_values/TW/2_v3.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h4 className="mt-4 text-base">集結全球好設計</h4>
            <p className="mt-4 text-sm">
              販售超過百萬件獨特商品，透過好設計實現心中的理想生活
            </p>
          </div>
          <div className="w-72 text-center py-10">
            <div className="relative w-48 h-28 mx-auto">
              <Image
                src="https://cdn04.pinkoi.com/pinkoi.site/home/core_values/TW/2_v3.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h4 className="mt-4 text-base">集結全球好設計</h4>
            <p className="mt-4 text-sm">
              販售超過百萬件獨特商品，透過好設計實現心中的理想生活
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
