'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { LuSun as SunIcon, LuMoon as MoonIcon } from 'react-icons/lu';
import { Hr, Gb, It, De } from 'react-flags-select';
import Image from 'next/image';
import { useLocalStorage } from '@uidotdev/usehooks';
import { logoHorizontal } from '../pathsUtils/mediaImportsDynamic';

const AppHeader = () => {
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [getThemeIfAny, setThemeToStorage] = useLocalStorage('@sutra-user-crl-scheme', 'light');
  const splitPath = currentPath.split('/');
  const currentLang = splitPath[1];

  const [theme, setTheme] = React.useState(getThemeIfAny);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  const langs = [
    { title: 'Hrvatski', lang: 'hr', flag: <Hr width={24} height={24} /> },
    { title: 'English', lang: 'eng', flag: <Gb width={24} height={24} /> },
    { title: 'Deutsch', lang: 'ger', flag: <De width={24} height={24} /> },
    { title: 'Italiano', lang: 'ita', flag: <It width={24} height={24} /> },
  ];

  const navLinks = {
    main: [
      { url: `/${currentLang}`, title: 'Home' },
      { url: `/${currentLang}/blog`, title: 'Blog' },
      { url: `/${currentLang}/news`, title: 'News' },
      { url: `/${currentLang}/about-us`, title: 'About' },
      { url: `/${currentLang}/contact`, title: 'Contact' },
      { url: `/${currentLang}/what-to-visit`, title: 'What to visit?' },
    ],
    legal: [
      { url: `/${currentLang}/legal-info`, title: 'Legal info' },
      { url: `/${currentLang}/company-info`, title: 'Company info' },
      { url: `/${currentLang}/faq`, title: 'FAQ' },
    ],
    resources: [
      { url: `/${currentLang}/sub-page-5`, title: 'Baza tekstova 5 pasusa' },
      { url: `/${currentLang}/sub-page-1`, title: 'Baza tekstova 1 modul' },
      { url: `/${currentLang}/msg-singles`, title: 'Poruke pojedinačno' },
      { url: `/${currentLang}/hero-sections`, title: 'Hero kompilacija' },
      { url: `/${currentLang}/maps`, title: 'Mape kompilacija' },
      { url: `/${currentLang}/schedule`, title: 'Rasporedi' },
      { url: `/${currentLang}/liste-bullets`, title: 'Liste' },
    ],
    other: [
      { url: `/${currentLang}/360-tours`, title: 'Šetnje' },
      { url: `/${currentLang}/buttons-compilation`, title: 'Botuni' },
      { url: `/${currentLang}/radna-vremena`, title: 'Radna vremena' },
      { url: `/${currentLang}/social-links`, title: 'Društvene mreže' },
      { url: `/${currentLang}/gallery`, title: 'Galerija' },
      { url: `/${currentLang}/blog-news-cards`, title: 'Kartice' },
      { url: `/${currentLang}/locations`, title: 'Lokacije' },
      { url: `/${currentLang}/notifications-page`, title: 'Obavijesti' },
      { url: `/${currentLang}/partners`, title: 'Logo partneri' },
    ],
    visuals: [{ url: `/${currentLang}/textures-bg`, title: 'Teksture pozadine' }],
  };

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setThemeToStorage(theme === 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    getThemeIfAny === 'light'
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark');

    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [theme, getThemeIfAny]);

  React.useEffect(() => {
    isMobileMenuOpen
      ? document.documentElement.classList.add('overflow-hidden')
      : document.documentElement.classList.remove('overflow-hidden');
  }, [isMobileMenuOpen]);

  const handleLangSwitch = (lang: string) => {
    // Postavi kolačić na odabrani jezik
    document.cookie = `@sutra-user-lang=${lang}; path=/; max-age=31536000`; // 1 godina

    // Preusmjeri na novu putanju
    router.push(
      `/${lang}${currentPath.replace(`/${currentLang}`, '')}${
        searchParams.toString() ? '?' + searchParams.toString() : ''
      }`
    );
  };

  return (
    <nav className='bg-transparent absolute z-50 w-full h-full top-0'>
      <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0 pb-4 pt-12'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='shrink-0'>
              <a href={`/${currentLang}`} title='' className='block w-52 h-12 relative'>
                <Image
                  className='dark:hidden block w-full h-full object-center object-cover'
                  src={logoHorizontal['dark-bg']}
                  alt=''
                  width={200}
                  height={50}
                />

                <Image
                  className='hidden dark:block w-full h-full'
                  src='https://cms.sutra.hr/wp-content/uploads/2024/06/Sutra-profilna-slika-1.jpg'
                  alt=''
                  width={128}
                  height={128}
                />
              </a>
            </div>

            <div
              className={`absolute z-40 w-full h-screen bg-red-300 inset-0 transition-all duration-300 flex items-center lg:justify-center justify-start flex-col lg:pt-0 pt-24  ${
                isMobileMenuOpen
                  ? 'opacity-100 pointer-events-auto select-auto'
                  : 'opacity-0 select-none pointer-events-none'
              }`}
            >
              <ul className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-2 w-full lg:px-6 px-2'>
                {Object.entries(navLinks).map(([category, links]) => (
                  <li key={category} className='mt-4'>
                    <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-2'>{category.toUpperCase()}</h3>
                    <ul className='pl-4'>
                      {links.map((navLink) => (
                        <li key={navLink.title} className='shrink-0'>
                          <a
                            href={navLink.url}
                            className='flex xl:text-2xl lg:text-xl md:text-lg text-base font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500'
                          >
                            {navLink.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex items-center space-x-4 z-40'>
            {/* {langs.map((language) => (
              <button
                disabled={currentLang === language.lang}
                key={language.lang}
                className='text-sm font-medium text-gray-900 dark:text-white flex place-items-center gap-2 transition-all ease-out hover:-translate-y-1 hover:scale-110'
                onClick={() => handleLangSwitch(language.lang)}
              >
                {language.flag}
              </button>
            ))} */}

            {/* <div
              onClick={handleTheme}
              className='z-40 cursor-pointer outline outline-1 rounded-full outline-offset-4 outline-almost-black dark:outline-almost-white transition-all duration-300 ease-linear'
            >
              {theme === 'light' ? <SunIcon size={24} color='#181816' /> : <MoonIcon size={24} color='#F8F7F2' />}
            </div> */}
            <div className='w-min z-40'>
              <Hamburger color='#C3C6B6' onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
