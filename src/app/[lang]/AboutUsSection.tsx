'use client';
import prvaCEO from '../images/prva-zena-1.png';
import prvaCEOSec from '../images/prva-zena-2.png';
import teksturaPaper from '../images/prva-tekstura-paper.png';
import Image from 'next/image';
import { PT_Serif } from 'next/font/google';
import { logoSymbol } from '../pathsUtils/mediaImportsDynamic';
import { useParallax } from 'react-scroll-parallax';

const PT = PT_Serif({ subsets: ['latin'], weight: ['400'], style: ['italic'] });

const textBlockFirst = `Zamislite da vaš brend postane glavni junak najuzbudljivijeg romana, a mi smo autori koji pišu svaku stranicu sa strašću i preciznošću. Naša snaga leži u tome što prepoznajemo vašu jedinstvenost i pretvaramo je u magnet za vaše klijente.`;

const quoteText = `Biti ćemo vaš čarobnjak iz sjene, spreman da vaš brend podignemo na tron popularnosti. Naša formula za uspjeh kombinacija je strateškog pristupa, kreativne genijalnost i doze avanturizma koja osvaja srca.`;

const textBlockSecond = `Napravite s nama PRvi korak ka željenom imidžu. Vodit ćemo Vam društvene mreže, kreirati online kampanje, pisati tekstove i članke, organizirati događaje i savjetovati Vas u vezi s poslovanjem. Zajedno ćemo ispisati stranice Vašeg uspjeha.`;

const AboutUsSection = () => {
  const backgroundParallax = useParallax({
    translateY: [0, 0],
    shouldAlwaysCompleteAnimation: true,
  });

  const foregroundParallax = useParallax({
    translateY: [0, 0],
    shouldAlwaysCompleteAnimation: true,
  });

  const overlayParallax = useParallax({
    translateY: [0, 25],
    shouldAlwaysCompleteAnimation: true,
  });

  return (
    <section className='w-full h-full 2xl:min-h-screen min-h-[80vh] flex items-center justify-center relative flex-wrap bg-white overflow-x-hidden'>
      <Image
        src={teksturaPaper}
        alt='background texture'
        fill
        className='absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none select-none opacity-30'
      />
      <div className='kontejner w-full h-full flex  items-center justify-center max-w-screen-xl mx-auto z-[2] flex-col'>
        <div className='kontejnermali w-full h-full flex justify-center gap-20  prva-custom-break:flex-nowrap flex-wrap'>
          <div className='lg:max-w-[50ch]  w-full flex flex-col items-start justify-start gap-6  px-4 lg:pt-0 pt-12'>
            <h2 className={`${PT.className} xl:text-5xl lg:text-4xl text-3xl text-prva-text-color`}>O nama</h2>
            <p className='text-sm text-prva-text-color'>{textBlockFirst}</p>
            <blockquote className={`${PT.className} xl:text-3xl lg:text-2xl text-xl  text-prva-subtext `}>
              <p>{quoteText}</p>
            </blockquote>
            <p className='text-sm text-prva-text-color'>{textBlockSecond}</p>

            <div
              onClick={() => {
                const ele = document.getElementById('PRVA_KONTAKT');

                ele && ele.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
              }}
              className='bg-prva-tamnija-boja text-base text-almost-white px-9 py-4 cursor-pointer transition-all hover:bg-prva-tamnozelena-boja'
            >
              <p className='outline-none border-none'>Kontaktiraj nas</p>
            </div>
          </div>
          <div className='w-full relative h-full lg:min-h-[auto] min-h-[70vh] md:px-0 sm:px-4 px-0'>
            <Image
              ref={backgroundParallax.ref as any}
              src={prvaCEO}
              quality={100}
              width={456}
              height={551}
              alt='Prva agencija CEO'
              className='object-cover object-center z-20 block relative lg:h-auto h-[580px]'
              loading='lazy'
            />

            <Image
              ref={overlayParallax.ref as any}
              src={prvaCEOSec}
              width={353}
              height={530}
              quality={100}
              alt='Prva agencija CEO'
              className='object-cover object-center absolute  lg:-top-12 top-0  -right-24  z-10 lg:h-auto h-[580px] lg:block hidden'
              loading='lazy'
            />

            <Image
              ref={overlayParallax.ref as any}
              src={prvaCEOSec}
              width={353}
              height={530}
              quality={100}
              alt='Prva agencija CEO'
              className='object-cover object-center absolute  lg:-top-12 top-0  -right-24  z-10 lg:h-auto h-[580px] lg:hidden sm:block hidden'
              loading='lazy'
            />

            <Image
              ref={foregroundParallax.ref as any}
              src={logoSymbol['dark-bg']}
              alt='Prva agencija logo'
              width={140}
              height={140}
              className='object-cover object-center lg:block hidden absolute  z-20  -bottom-12 left-[60%]'
            />

            <Image
              src={logoSymbol['dark-bg']}
              alt='Prva agencija logo'
              width={140}
              height={140}
              className='object-cover object-center prva-custom-break:hidden block absolute  z-20  bottom-12 left-[60%]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
