'use client';

import Image from 'next/image';

import { Cormorant_Garamond } from 'next/font/google';
import Snowfall from 'react-snowfall';
import { useParallax } from 'react-scroll-parallax';
const CormoGara = Cormorant_Garamond({ subsets: ['latin'], weight: ['300'], style: ['italic'] });

interface HeroSectionInterface {
  backgroundUrl: string | any;
}

const HeroSection = ({ backgroundUrl }: HeroSectionInterface) => {
  const backgroundParallax = useParallax({
    translateY: [0, 15],
    shouldAlwaysCompleteAnimation: true,
  });

  const foregroundParallax = useParallax({
    translateY: [0, 20],
    shouldAlwaysCompleteAnimation: true,
  });
  return (
    <section className='bg-white h-[70dvh] w-full relative animate-easeFadeBasic'>
      <div className='relative w-full h-full bg-primary-dark flex items-center justify-center'>
        <div
          ref={foregroundParallax.ref as any}
          className='flex flex-col gap-4 items-center justify-center lg:px-0 px-4'
        >
          <h1
            className={`${CormoGara.className} text-prva-svijetla-boja xl:text-5xl text-4xl  whitespace-pre-wrap text-center`}
          >{`„Advertising is saying you're good.\nPR is getting someone else to say you're good.“ `}</h1>
          <p className={`${CormoGara.className} text-prva-subtext lg:text-h5_xs text-lg`}>Jean-Louis Gassée</p>
        </div>
        <Image
          ref={backgroundParallax.ref as any}
          src={backgroundUrl}
          width={1600}
          height={1200}
          alt='backround overlay for Prva Agencija'
          className='object-cover object-center block aspect-video w-full h-full mx-auto my-0 select-none pointer-events-none absolute inset-0'
          priority
        />
      </div>
      <Snowfall
        style={{ transform: 'rotate(180deg)', color: '#C3C6B6', opacity: '0.1' }}
        snowflakeCount={250}
        speed={[1, 1.5]}
        radius={[0.25, 2]}
        wind={[1, 3]}
      />
    </section>
  );
};

export default HeroSection;
