'use client';

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import StolPozadina from '../images/prva-stol-pozadina.png';
import Image from 'next/image';
const BannerSectionMainPage = () => {
  return (
    <section className='w-full'>
      <ParallaxBanner className='w-full h-[360px] relative'>
        <ParallaxBannerLayer speed={10}>
          <Image
            src={StolPozadina}
            alt='Picture of a table in office'
            fill
            loading='lazy'
            className='object-cover object-center block aspect-video'
          />
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
};

export default BannerSectionMainPage;
