'use client';

import Image from 'next/image';
import prvaAgencijaHeroBg from '../images/prva-hero-bg.png';
import { Cormorant_Garamond } from 'next/font/google';

const CormoGara = Cormorant_Garamond({ subsets: ['latin'], weight: ['300'], style: ['italic'] });

const checkImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      next: { revalidate: 3600 },
    });
    return response.ok;
  } catch (error) {
    console.error('Error checking image URL:', error);
    return false;
  }
};

const HeroSection = () => {
  return (
    <section className='bg-white dark:bg-gray-900 h-screen w-full'>
      <div className='relative w-full h-full bg-primary-dark flex items-center justify-center'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <h1
            className={`${CormoGara.className} text-prva-svijetla-boja xl:text-5xl lg:text-4xl md:text-3xl text-2xl whitespace-pre-wrap text-center`}
          >{`„Advertising is saying you're good.\nPR is getting someone else to say you're good.“ `}</h1>
          <p className='text-prva-svijetla-boja text-h5_xs'>Jean-Louis Gassée</p>
        </div>
        <Image
          src={prvaAgencijaHeroBg}
          width={1600}
          height={1200}
          alt='backround overlay for Prva Agencija'
          className='object-cover object-center block aspect-video w-full h-full mx-auto my-0 select-none pointer-events-none absolute inset-0'
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
