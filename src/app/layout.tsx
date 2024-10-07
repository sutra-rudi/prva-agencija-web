import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';
// import { cookies } from 'next/headers';
// import { UserLanguage } from './enums/LangEnum';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loading from './loading';
import { Providers } from './providers';
import { appleTouchIcons, favicons } from './pathsUtils/mediaImportsDynamic';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });
import dynamic from 'next/dynamic';

async function fetchMediaPaths() {
  try {
    const response = await fetch(`${process.env.BASE_APP_URL}/api/mediaPaths`);

    if (!response.ok) {
      throw new Error('Neuspješno dohvaćanje putanja medija');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Greška prilikom dohvaćanja medija:', error);
    return [];
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 3,
  userScalable: true,
  interactiveWidget: 'overlays-content',
  colorScheme: 'light',
  themeColor: '#C3C6B6',
};

export const metadata: Metadata = {
  title: 'Prva Agencija',
  description: 'Marketing',

  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '196x196',
      url: favicons['196x196'],
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: favicons['96x96'],
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: favicons['32x32'],
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: favicons['16x16'],
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '128x128',
      url: favicons['128x128'],
    },
    // Apple Touch Icons
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      url: appleTouchIcons['57x57'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      url: appleTouchIcons['114x114'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      url: appleTouchIcons['72x72'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      url: appleTouchIcons['144x144'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      url: appleTouchIcons['60x60'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      url: appleTouchIcons['120x120'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      url: appleTouchIcons['76x76'],
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      url: appleTouchIcons['152x152'],
    },
  ],
};

const ClientHeader = dynamic(() => import('./globalComponents/AppHeader'), { ssr: false });
const AppFooter = dynamic(() => import('./globalComponents/AppFooter'));

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const cookieStore = cookies();
  // const lang = (cookieStore.get('@sutra-user-lang')?.value as UserLanguage) || 'hr';
  const mediaRes = await fetchMediaPaths();

  const mediaShorthand = mediaRes.prvaAgencijaOpt;

  console.log('MEDIA', mediaShorthand);

  return (
    <html
      // lang={lang}
      lang='hr'
      className='scrollbar scrollbar-thumb-prva-tamnozelena-boja dark:scrollbar-thumb-primary-dark  scrollbar-track-prva-svijetla-boja dark:scrollbar-track-primary-light min-h-screen w-full h-full'
    >
      <body className={`${poppins.className} w-full h-full`}>
        <Suspense fallback={<Loading />}>
          <ClientHeader logoUrlLight={mediaShorthand.prvaLogoOnLight} logoUrlDark={mediaShorthand.prvaLogoOnDark} />
          <Toaster />
          <Providers>{children}</Providers>

          <AppFooter />
        </Suspense>
      </body>
    </html>
  );
}
