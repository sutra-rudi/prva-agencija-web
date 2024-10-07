'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import { useLocalStorage } from '@uidotdev/usehooks';

interface AppHeaderInterface {
  logoUrl: string | any;
}

const AppHeader = ({ logoUrl }: AppHeaderInterface) => {
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [getThemeIfAny, setThemeToStorage] = useLocalStorage('@sutra-user-crl-scheme', 'light');
  const splitPath = currentPath.split('/');
  const currentLang = splitPath[1];

  const isNewsPage = React.useMemo(() => currentPath.split('/').includes('news'), [currentPath]);

  const [theme, setTheme] = React.useState(getThemeIfAny);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

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
    <nav className={`bg-transparent absolute z-50 w-full top-0`}>
      <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0 pb-4 pt-12'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='shrink-0'>
              <a href={`/${currentLang}`} title='' className='block w-52 h-12 relative'>
                <Image
                  className='dark:hidden block w-full h-full object-center object-cover'
                  src={logoUrl}
                  alt='Prva Agencija logo'
                  width={200}
                  height={50}
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
