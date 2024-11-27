'use client';

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

interface BannerSection {
  mediaUrl: string | any;
}
const BannerSectionMainPage = ({ mediaUrl }: BannerSection) => {
  return (
    <section className='w-full'>
      <ParallaxBanner className='w-full h-[360px] relative overflow-hidden' translate='yes'>
        <ParallaxBannerLayer speed={5}>
          <picture>
            <img
              src={mediaUrl}
              alt='Picture of a table in office'
              loading='lazy'
              className='object-cover object-center block w-full h-full aspect-auto'
            />
          </picture>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
};

export default BannerSectionMainPage;
