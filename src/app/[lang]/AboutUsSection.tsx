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
interface Ab {
  dataLog: any;
}
const AboutUsSection = () => {
  const backgroundParallax = useParallax({
    translateY: [0, 5],
    shouldAlwaysCompleteAnimation: true,
  });

  const foregroundParallax = useParallax({
    translateY: [0, 10],
    shouldAlwaysCompleteAnimation: true,
  });

  const overlayParallax = useParallax({
    translateY: [0, 15],
    shouldAlwaysCompleteAnimation: true,
  });

  return (
    <section className='w-full h-full min-h-screen flex items-center justify-center relative flex-wrap bg-white overflow-x-hidden'>
      <Image
        src={teksturaPaper}
        alt='background texture'
        fill
        className='absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none select-none opacity-30'
      />
      <div className='kontejner w-full h-full flex  items-center justify-center max-w-screen-xl mx-auto z-[2] flex-col'>
        <div className='kontejnermali w-full h-full flex justify-center gap-20  prva-custom-break:flex-nowrap flex-wrap'>
          <div className='lg:max-w-[55ch]  w-full flex flex-col items-start justify-start gap-6  px-4 lg:pt-0 pt-12'>
            <h2 className={`${PT.className} xl:text-5xl lg:text-4xl text-3xl text-prva-tamnozelena-boja `}>O nama</h2>
            <p className='lg:text-lg text-base text-prva-tamnozelena-boja'>{textBlockFirst}</p>
            <blockquote className={`${PT.className} lg:text-2xl text-xl  text-prva-tamnija-boja `}>
              <p>{quoteText}</p>
            </blockquote>
            <p className='lg:text-lg text-base text-prva-tamnozelena-boja'>{textBlockSecond}</p>

            <a href='/' className='bg-prva-tamnija-boja text-base text-almost-white px-9 py-4'>
              <button role='button' type='button' className='outline-none border-none'>
                Kontaktiraj nas
              </button>
            </a>
          </div>
          <div className='w-full relative h-full lg:min-h-[unset] min-h-[800px]'>
            <Image
              ref={backgroundParallax.ref as any}
              src={prvaCEO}
              quality={100}
              width={456}
              height={551}
              alt='Prva agencija CEO'
              className='object-cover object-center z-20 block relative lg:h-auto h-[680px]'
              loading='lazy'
            />

            <Image
              ref={overlayParallax.ref as any}
              src={prvaCEOSec}
              width={353}
              height={530}
              quality={100}
              alt='Prva agencija CEO'
              className='object-cover object-center absolute  lg:-top-12 top-0  -right-24  z-10 lg:h-auto h-[680px] '
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
