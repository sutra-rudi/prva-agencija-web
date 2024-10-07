'use client';

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
interface BannerSection {
  mediaUrl: string | any;
}
const BannerSectionMainPage = ({ mediaUrl }: BannerSection) => {
  return (
    <section className='w-full'>
      <ParallaxBanner className='w-full h-[360px] relative overflow-hidden' translate='yes'>
        <ParallaxBannerLayer speed={15}>
          <Image
            src={mediaUrl}
            alt='Picture of a table in office'
            fill
            loading='lazy'
            quality={100}
            className='object-cover object-center block w-full h-full'
          />
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
};

export default BannerSectionMainPage;
