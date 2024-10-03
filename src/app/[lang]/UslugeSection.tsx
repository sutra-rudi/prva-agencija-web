'use client';

import React from 'react';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import slugify from 'slugify';
import { slugifyOptions } from '../pathsUtils/slugifyOptions';
import ServiceCard from '../components/ServiceCard';
import Script from 'next/script';
import { PT_Serif } from 'next/font/google';
import parse from 'html-react-parser';
import uslugeBG from '../images/usluge-lines-slika.png';
import Image from 'next/image';

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

  console.log('PAGE CONTENT', pageContent);

  return (
    <section className='w-full bg-prva-svijetla-boja relative pt-16 pb-20'>
      <Image
        src={uslugeBG}
        alt='art lines'
        fill
        loading='lazy'
        className='object-cover object-center opacity-10 pointer-events-none select-none'
      />
      <div className='w-full max-w-screen-xl mx-auto text-center '>
        <h2 className={`${PT.className} text-5xl `}>Usluge</h2>
        <p className='max-w-prose text-prva-tamnozelena-boja text-base pt-6 mx-auto'>
          Ako želite da se čuje za Vaše proizvode, usluge ili za vrijedne projekte na kojima radite, potrebno vam je
          bolje i kvalitetnije online prisustvo i treba Vam pomoć u promociji i komunikaciji s medijima i javnosti-
          PRepustite se nama!
        </p>
        <p className='max-w-prose text-prva-tamnozelena-boja text-base pt-3 mx-auto'>
          Javite nam se i za besplatne konzultacije. Rado ćemo Vas saslušati i savjetovati.
        </p>
      </div>

      <div className='w-1/2 h-px mx-auto bg-prva-tamna-boja mt-10'></div>
      <div className='max-w-screen-xl mx-auto my-8 grid grid-cols-2 gap-14'>
        {pageContent.map((cont: any) => {
          const titleShorthand = cont.node.uslugeSadrzajHr.sadrzajGrupeUsluga;
          const contentShorthand = titleShorthand.sadrzajusluge;
          return (
            <article key={cont.node.id} className='flex flex-col gap-2 items-start justify-start'>
              <h3 className={`${PT.className} text-h5_xs text-prva-tamnozelena-boja`}>{titleShorthand.nazivusluge}</h3>
              <div className='prose prose-p:text-base prose-p:text-prva-tamnozelena-boja'>
                {parse(contentShorthand.sadrzajPasusa)}
              </div>
            </article>
          );
        })}
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
