'use client';

import { getSuffixFromLang } from '@/app/langUtils/getSuffixFromLang';
import React from 'react';
import slugify from 'slugify';

interface ListePageContent {
  pageContent: any[];
  lang: string;
  baseURL: string;
}

const PageContent = ({ pageContent, lang, baseURL }: ListePageContent) => {
  const l = getSuffixFromLang(lang);

  console.log('PAGE CONTENT', pageContent);
  const basePath = React.useMemo(() => `${baseURL}icons-list/`, [baseURL]);

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    const observer = new MutationObserver(() => checkDarkMode());

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className='w-full px-12 py-16'>
      <div className='w-full max-w-[1440px] mx-auto my-0 grid grid-cols-2 gap-4 gap-y-8 place-items-start'>
        {pageContent &&
          pageContent.map((nodeCont: any) => {
            const contentFieldMaster = `lista${l}`;
            const contentField = nodeCont.node[contentFieldMaster][`listaSadrzaj${l}`];
            const listaContent = contentField.split('\r\n');

            const triageOfIcons = nodeCont.node.ikona.odabirIkoneKojaSePrikazujeNaListi[0];

            const introField = nodeCont.node[contentFieldMaster][`listaUvod${l}`];
            return (
              <div key={nodeCont.node.title}>
                {/* <h2 className='text-2xl font-medium py-4 dark:text-primary-light'>{nodeCont.node.title}</h2> */}
                {introField.naslov && (
                  <div className='pt-4'>
                    <h3 className='text-2xl font-medium  dark:text-primary-light'>{introField.naslov}</h3>
                  </div>
                )}
                {introField.nadnaslovpodnaslovOpcionalno && (
                  <div className='pt-1'>
                    <h5 className='text-lg font-medium  dark:text-primary-light'>
                      {introField.nadnaslovpodnaslovOpcionalno}
                    </h5>
                  </div>
                )}

                {introField.uvodnaRecenica && (
                  <div className='pt-1'>
                    <p className='text-base font-medium  dark:text-primary-light'>{introField.uvodnaRecenica}</p>
                  </div>
                )}
                {triageOfIcons !== 'Brojevi' ? (
                  <ul className='flex items-start flex-col gap-2 appearance-none'>
                    {listaContent.map((list: any, index: number) => {
                      const imgShorthand = nodeCont.node.ikona.svgListIcon
                        ? nodeCont.node.ikona.svgListIcon.node.sourceUrl
                        : null;

                      const cmsImgPath = nodeCont.node.ikona.odabirIkoneKojaSePrikazujeNaListi[0];
                      const cmsClrPath = nodeCont.node.ikona.odabirBojeZaDefaultIkone[0];
                      const slugCrl =
                        isDarkMode && cmsClrPath === 'Primarna tamna'
                          ? slugify('Primarna svijetla', { lower: true })
                          : slugify(cmsClrPath, { lower: true });

                      const checkIfNumber = cmsImgPath.split('-')[0];

                      const fullURL = `${basePath}${cmsImgPath}-${slugCrl}.svg`;

                      return (
                        <li key={index} className='w-full flex items-center justify-start gap-3'>
                          {triageOfIcons === 'Dodaj svoju ikonu' && imgShorthand ? (
                            <picture>
                              <img
                                src={imgShorthand}
                                alt='image for list item'
                                className='w-6 h-6 object-cover object-center'
                              />
                            </picture>
                          ) : checkIfNumber === 'Broj' ? (
                            <div className='relative'>
                              <span className='absolute left-1/2 -translate-x-1/2 text-primary-dark dark:text-primary-light z-20'>
                                {index + 1}
                              </span>
                              <picture>
                                <img src={fullURL} className='w-6 h-6 object-cover object-center' alt='' />
                              </picture>
                            </div>
                          ) : (
                            <picture>
                              <img
                                src={fullURL}
                                alt='image for list item'
                                className='w-6 h-6 object-cover object-center'
                              />
                            </picture>
                          )}
                          <span className='text-base font-normal dark:text-primary-light'>{list}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <ol className='appearance-none flex items-start flex-col gap-2'>
                    {listaContent.map((list: any, index: number) => {
                      const clr = nodeCont.node.ikona.odabirBojeZaDefaultIkone[0];

                      const clrPathDict = () => {
                        if (isDarkMode) {
                          return 'accent';
                        } else {
                          if (clr === 'Akcentna') {
                            return 'accent';
                          }
                          if (clr === 'Primarna tamna') {
                            return 'primary-dark';
                          }
                          if (clr === 'Primarna svijetla') {
                            return 'primary-light';
                          }
                        }
                      };

                      return (
                        <li key={index} className='flex items-center justify-start gap-3 dark:text-primary-light'>
                          <span
                            className={`bg-${clrPathDict()} rounded-full w-6 h-6  flex items-center justify-center ${
                              clrPathDict() === 'primary-dark' && 'text-primary-light dark:text-primary-dark'
                            }`}
                          >
                            {index + 1}
                          </span>
                          {list}
                        </li>
                      );
                    })}
                  </ol>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default PageContent;
