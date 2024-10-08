import React from 'react';
// import { getAllSocialLinksQuery } from '../queries/getAllSocialLinksQuery';
import Image from 'next/image';
import { logoVertical } from '../pathsUtils/mediaImportsDynamic';
import uslugeBG from '../images/usluge-lines-slika.png';

export default async function AppFooter() {
  // const getAllSocialLinks = await fetch(`${process.env.CMS_BASE_URL}`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     query: getAllSocialLinksQuery(),
  //   }),
  // });

  // const parseDataSocialLinks = await getAllSocialLinks.json();

  // const dataShorthand = parseDataSocialLinks.data.allDrustveneMrezeLinkovi.edges[0].node;

  // const socialLinks: [string, string][] = Object.entries(dataShorthand.povezniceDrustvene);

  return (
    <footer className='px-4 py-24 bg-prva-tamnozelena-boja min-h-96 flex items-center justify-center relative'>
      <Image
        src={uslugeBG}
        alt='art lines'
        fill
        loading='lazy'
        className='object-cover object-center opacity-10 pointer-events-none select-none'
      />
      <div className='max-w-screen-xl flex items-center justify-start flex-col'>
        <Image
          src={logoVertical['dark-bg']}
          alt='brand-logo'
          width={128}
          height={128}
          className='object-cover object-center block mb-14'
        />
        <p className='lg:text-base text-sm text-prva-tamnija-boja xl:text-nowrap text-balance lg:text-left text-center'>
          PRVA AGENCIJA, obrt za odnose s javnošću i djelatnost priopćivanja, vl. Andrea Vitlov Kurtin, Kali, Ulica sv.
          Lovre 74
        </p>

        <p className='text-sm lg:text-left text-center text-prva-tamnija-boja mt-12'>web by sutra.hr</p>
      </div>
    </footer>
  );
}
