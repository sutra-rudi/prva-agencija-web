'use client';

import React from 'react';
import { PT_Serif } from 'next/font/google';
import parse from 'html-react-parser';
import uslugeBG from '../images/usluge-lines-slika.png';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

const PT = PT_Serif({ subsets: ['latin'], weight: ['400'], style: ['italic'] });

interface UslugeSectionInterface {
  pageContent: any;
  lang: any;
}

// function generateServicesSchemaOrg(pageContent: any, lang: string) {
//   const l = getSuffixFromLang(lang);

//   // Generiraj listu usluga
//   const services = pageContent.map((content: any) => {
//     const contentShorthand = content.node;

//     const titleShorthandObj =
//       contentShorthand[`modulBazeTekstova2Kolumne${l}`]?.[`naslovNadnaslov2KolumneTeksta${l}`].naslovIPodnaslovDvaPolja;

//     const thumbImageShorthandObj = contentShorthand.modulBazeTekstovaUvod.slika1.node;

//     return {
//       '@type': 'Service',
//       serviceType: titleShorthandObj.naslovBazaTekstova ?? 'Unknown Service',
//       description: titleShorthandObj.nadnaslovPodnaslovBazaTekstova ?? 'No description available',
//       provider: {
//         '@type': 'Organization', // Možeš promijeniti u odgovarajući tip ako je potrebno
//         name: 'Your Organization Name', // Zamijeni sa stvarnim imenom organizacije
//         logo: thumbImageShorthandObj.sourceUrl ?? '', // Zamijeni ako imaš URL za logo
//       },
//       url: `/${lang}/services-offers/${
//         slugify(`${titleShorthandObj.naslovBazaTekstova ?? ''}`, slugifyOptions) + `-${contentShorthand.id}`
//       }`,
//       image: thumbImageShorthandObj.sourceUrl ?? '',
//     };
//   });

//   // Vraćamo cijeli schema.org objekt
//   const schemaOrgData = {
//     '@context': 'https://schema.org',
//     '@type': 'ItemList',
//     name: 'Our Services',
//     description: 'A catalog of the services we offer.',
//     itemListElement: services, // Promijenjeno na itemListElement
//   };

//   return JSON.stringify(schemaOrgData, null, 2); // Dodano formatiranje za preglednost
// }

const UslugeSection = ({ pageContent, lang }: UslugeSectionInterface) => {
  // const schemaOrgData = generateServicesSchemaOrg(pageContent, lang);
  const backgroundParallax = useParallax({
    translateY: [0, 5],
    shouldAlwaysCompleteAnimation: true,
  });

  return (
    <section className='w-full bg-prva-svijetla-boja relative pt-16 pb-20  px-4 overflow-hidden'>
      <Image
        ref={backgroundParallax.ref as any}
        src={uslugeBG}
        alt='art lines'
        fill
        loading='lazy'
        className='object-cover object-center opacity-10 pointer-events-none select-none'
      />
      <div className='w-full max-w-screen-xl mx-auto text-center '>
        <h2 className={`${PT.className} xl:text-5xl lg:text-4xl text-3xl`}>Usluge</h2>
        <p className='max-w-prose text-prva-tamnozelena-boja text-base pt-6 mx-auto'>
          Ako želite da se čuje za Vaše proizvode, usluge ili za vrijedne projekte na kojima radite, potrebno vam je
          bolje i kvalitetnije online prisustvo i treba Vam pomoć u promociji i komunikaciji s medijima i javnosti-
          PRepustite se nama!
        </p>
        <p className='max-w-prose text-prva-tamnozelena-boja text-base pt-3 mx-auto'>
          Javite nam se i za besplatne konzultacije. Rado ćemo Vas saslušati i savjetovati.
        </p>
      </div>

      <div className='w-1/2 h-px mx-auto bg-prva-tamna-boja mt-10 mb-24'></div>
      <div className='max-w-screen-xl mx-auto my-8'>
        <div className='w-full flex items-start justify-start lg:gap-8 gap-14 md:flex-nowrap flex-wrap'>
          <div className='grid grid-cols-1 lg:place-items-start place-items-center gap-14'>
            {pageContent.slice(0, 3).map((cont: any) => {
              const titleShorthand = cont.node.uslugeSadrzajHr.sadrzajGrupeUsluga;
              const contentShorthand = titleShorthand.sadrzajusluge;
              return (
                <article
                  key={cont.node.id}
                  className='flex flex-col gap-2 items-start justify-start md:text-left text-center'
                >
                  <h3
                    className={`${PT.className} text-h5_xs text-prva-tamnozelena-boja w-full md:text-left text-center`}
                  >
                    {titleShorthand.nazivusluge}
                  </h3>
                  <div className='prose prose-p:text-base prose-p:text-prva-tamnozelena-boja'>
                    {parse(contentShorthand.sadrzajPasusa)}
                  </div>
                </article>
              );
            })}
          </div>
          <div className='grid grid-cols-1 lg:place-items-start place-items-center gap-14'>
            {pageContent.slice(3, 7).map((cont: any) => {
              const titleShorthand = cont.node.uslugeSadrzajHr.sadrzajGrupeUsluga;
              const contentShorthand = titleShorthand.sadrzajusluge;
              return (
                <article
                  key={cont.node.id}
                  className='flex flex-col gap-2 items-start justify-start md:text-left text-center'
                >
                  <h3
                    className={`${PT.className} text-h5_xs text-prva-tamnozelena-boja w-full md:text-left text-center`}
                  >
                    {titleShorthand.nazivusluge}
                  </h3>
                  <div className='prose prose-p:text-base prose-p:text-prva-tamnozelena-boja'>
                    {parse(contentShorthand.sadrzajPasusa)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* <Script
        id='schema-org-services'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: schemaOrgData,
        }}
      /> */}
    </section>
  );
};

export default UslugeSection;
