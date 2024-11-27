import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loading from './loading';
import { Providers } from './providers';
import { appleTouchIcons, favicons } from './pathsUtils/mediaImportsDynamic';
import { GoogleAnalytics } from '@next/third-parties/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });
import dynamic from 'next/dynamic';
import { fetchMediaPaths } from './utils/callMediaPaths';

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
  description:
    'Zamislite da vaš brend postane glavni junak najuzbudljivijeg romana, a mi smo autori koji pišu svaku stranicu sa strašću i preciznošću.',
  robots: 'index, follow',

  keywords: 'brendiranje, marketing, agencija, dizajn, SEO, digitalni marketing, online marketing',
  authors: [
    {
      name: 'Prva Agencija',
    },
    {
      name: 'Studio Sutra',
    },
  ],

  openGraph: {
    title: 'Prva Agencija',
    description:
      'Zamislite da vaš brend postane glavni junak najuzbudljivijeg romana, a mi smo autori koji pišu svaku stranicu sa strašću i preciznošću.',
    url: 'https://www.prva-agencija.hr/',
    siteName: 'Prva Agencija',
  },

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

const ClientHeader = dynamic(() => import('./globalComponents/AppHeader'));
const AppFooter = dynamic(() => import('./globalComponents/AppFooter'));

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mediaRes = await fetchMediaPaths();

  const { prvaAgencijaOpt } = mediaRes;

  return (
    <html
      lang='hr'
      className='scrollbar scrollbar-thumb-prva-tamnozelena-boja dark:scrollbar-thumb-primary-dark  scrollbar-track-prva-svijetla-boja dark:scrollbar-track-primary-light min-h-screen w-full h-full'
    >
      <body className={`${poppins.className} w-full h-full antialiased`}>
        <ClientHeader logoUrlLight={prvaAgencijaOpt.prvaLogoOnLight} logoUrlDark={prvaAgencijaOpt.prvaLogoOnDark} />
        <Toaster />
        <Suspense fallback={<Loading />}>
          <Providers>{children}</Providers>
        </Suspense>
        <AppFooter />
      </body>

      <GoogleAnalytics gaId={process.env.PRVA_AGENCIJA_G_ANALYTICS!} />
    </html>
  );
}
