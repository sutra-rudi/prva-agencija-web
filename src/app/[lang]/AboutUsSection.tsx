import React from 'react';
import prvaCEO from '../images/prva-zena-1.png';
import prvaCEOSec from '../images/prva-zena-2.png';
import teksturaPaper from '../images/prva-tekstura-paper.png';
import Image from 'next/image';
import { PT_Serif } from 'next/font/google';
import { SutraButtonBase } from '../components/SutraButton';

const PT = PT_Serif({ subsets: ['latin'], weight: ['400'], style: ['italic'] });

const textBlockFirst = `Zamislite da vaš brend postane glavni junak najuzbudljivijeg romana, a mi smo autori koji pišu svaku stranicu sa strašću i preciznošću. Naša snaga leži u tome što prepoznajemo vašu jedinstvenost i pretvaramo je u magnet za vaše klijente.`;

const quoteText = `Biti ćemo vaš čarobnjak iz sjene, spreman da vaš brend podignemo na tron popularnosti. Naša formula za uspjeh kombinacija je strateškog pristupa, kreativne genijalnost i doze avanturizma koja osvaja srca.`;

const textBlockSecond = `Napravite s nama PRvi korak ka željenom imidžu. Vodit ćemo Vam društvene mreže, kreirati online kampanje, pisati tekstove i članke, organizirati događaje i savjetovati Vas u vezi s poslovanjem. Zajedno ćemo ispisati stranice Vašeg uspjeha.`;

const AboutUsSection = () => {
  return (
    <section className='w-full h-full min-h-screen flex items-center justify-center relative bg-white'>
      <Image
        src={teksturaPaper}
        alt='background texture'
        fill
        className='absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none select-none opacity-30'
      />
      <div className='kontejner w-full h-full flex items-center justify-center max-w-screen-xl mx-auto z-[2]'>
        <div className='kontejnermali w-full h-full flex justify-center gap-20'>
          <div className='max-w-[55ch] flex flex-col items-start justify-start gap-6'>
            <h2 className={`${PT.className} text-5xl text-prva-tamnozelena-boja`}>O nama</h2>
            <p className='text-base text-prva-tamnozelena-boja'>{textBlockFirst}</p>
            <blockquote className={`${PT.className} text-2xl text-prva-tamnija-boja`}>
              <p>{quoteText}</p>
            </blockquote>
            <p className='text-base text-prva-tamnozelena-boja'>{textBlockSecond}</p>
            <SutraButtonBase size='normal' innerText='Kontaktiraj nas' />
          </div>
          <div className='relative h-full'>
            <Image
              src={prvaCEO}
              width={456}
              height={551}
              alt='Prva agencija CEO'
              className='object-cover object-center z-20 block relative'
            />

            <Image
              src={prvaCEOSec}
              width={353}
              height={530}
              alt='Prva agencija CEO'
              className='object-cover object-center absolute -top-[20%] -right-1/2 z-10 block'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
