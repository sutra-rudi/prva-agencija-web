'use client';

import Link from 'next/link';
import React from 'react';
import Marquee from 'react-marquee-slider';

interface PartnersSectionInterface {
  pageContent: any;
}

const PartnersSection = ({ pageContent }: PartnersSectionInterface) => {
  // Dupliramo sadržaj kako bismo postigli neprekidno klizanje
  const duplicatedContent = [...pageContent, ...pageContent];

  return (
    <section>
      <h2 className='w-full text-center text-7xl font-semibold pt-8'>Partneri</h2>
      <div className='max-w-[1225px] mx-auto my-8'>
        <h2 className='mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl'>
          You&apos;ll be in good company
        </h2>
        <div className='overflow-hidden'>
          <Marquee
            velocity={12}
            scatterRandomly={false}
            onFinish={() => null}
            onInit={() => null}
            resetAfterTries={200}
            direction='ltr' // Lijevo na desno za kontinuirani efekt
          >
            {duplicatedContent.map((cont: any) => {
              const imageSourcesShorthand = cont.node.logotipiPartnera.logoPNG.node;
              return (
                cont.node.logotipiPartnera.prikaziNaNaslovnici && (
                  <Link
                    key={cont.node.id}
                    className='block mx-4'
                    href={cont.node.logotipiPartnera.linkNaStranicuKlijentapartnera}
                  >
                    <picture>
                      <source srcSet={imageSourcesShorthand.srcSet} sizes={imageSourcesShorthand.sizes} />
                      <img className='h-24 w-auto' src={imageSourcesShorthand.sourceUrl} alt='partner logo' />
                    </picture>
                  </Link>
                )
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
