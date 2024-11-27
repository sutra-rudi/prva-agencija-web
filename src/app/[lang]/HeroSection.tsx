'use client';

import { Cormorant_Garamond } from 'next/font/google';
import Snowfall from 'react-snowfall';
import { useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

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

  const firstLine = `"Advertising is saying you're good.`;
  const secondLine = `PR is getting someone else to say you're good.“`;

  // Motion variants for animation
  const fadeInUp = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.25,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className='bg-white lg:h-[678px] h-[560px] w-full relative animate-easeFadeBasic'>
      <div className='relative w-full h-full bg-primary-dark flex items-center justify-center z-10'>
        <div
          ref={foregroundParallax.ref as any}
          className='flex flex-col lg:gap-4 gap-2 items-center justify-center lg:px-0 px-4 z-20'
        >
          <motion.h1
            initial='hidden'
            animate='visible'
            variants={fadeInUp}
            className={`${CormoGara.className} text-prva-svijetla-boja xl:text-5xl text-4xl  whitespace-pre-wrap text-center`}
          >
            {firstLine}
          </motion.h1>

          <motion.h1
            initial='hidden'
            animate='visible'
            variants={fadeInDown}
            className={`${CormoGara.className} text-prva-svijetla-boja xl:text-5xl text-4xl  whitespace-pre-wrap text-center`}
          >
            {secondLine}
          </motion.h1>

          <motion.p
            initial='hidden'
            animate='visible'
            variants={fadeInDown}
            className={`${CormoGara.className} text-prva-subtext lg:text-h5_xs text-lg`}
          >
            Jean-Louis Gassée
          </motion.p>
        </div>

        <div className='w-full h-full inset-0 absolute select-none pointer-events-none'>
          <picture>
            <img
              ref={backgroundParallax.ref as any}
              src={backgroundUrl}
              width={1600}
              height={1200}
              alt='backround overlay for Prva Agencija'
              className='object-cover object-center block w-full h-full mx-auto my-0 select-none pointer-events-none opacity-10'
            />
          </picture>
        </div>
      </div>

      <Snowfall
        style={{ transform: 'rotate(180deg)', color: '#C3C6B6', opacity: '0.1', zIndex: 10 }}
        snowflakeCount={250}
        speed={[1, 1.5]}
        radius={[0.25, 2]}
        wind={[1, 3]}
      />
    </section>
  );
};

export default HeroSection;
