export const maxDuration = 60;

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '../loading';
import { getAllUslugeQuery } from '../queries/getAllUslugeQuery';
import { getAllCarouselBaseQuery } from '../queries/getAllCarouselBase';
import AboutUsSection from './AboutUsSection';
import BannerSectionMainPage from './BannerSectionMainPage';
import { getAllNewsQuery } from '../queries/getAllNewsQuery';
import NewsSection from './NewsSection';

const UslugeSection = dynamic(() => import('./UslugeSection'), { loading: () => <Loading /> });
const CarouselBase = dynamic(() => import('./CarouselBase'), { loading: () => <Loading /> });
const HeroSection = dynamic(() => import('./HeroSection'), { ssr: false, loading: () => <Loading /> });

async function fetchData(query: any, noCache: boolean = false) {
  try {
    const response = await fetch(`${process.env.CMS_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      cache: noCache ? 'no-store' : 'default', // Add cache control
    });

    if (!response.ok) {
      throw new Error(`Fetch error: ${response.statusText}`);
    }

    const data = await response.json(); // Directly parse JSON
    return data;
  } catch (error) {
    console.error('Fetch data error:', error);
    return null;
  }
}

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

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  const mediaRes = await fetchMediaPaths();

  try {
    const getAllUsluge = await fetchData(getAllUslugeQuery());
    const getAllCarouselBase = await fetchData(getAllCarouselBaseQuery());
    const getAllNews = await fetchData(getAllNewsQuery(lang));

    const uslugeDataArrayShorthand = getAllUsluge?.data?.allUsluge?.edges || [];

    const baseCarouselDataShorthand = getAllCarouselBase.data.karuselNaslovnica.edges[0].node.photoGallery30pcs || null;

    const newsDataArrayShorthand = getAllNews.data.allNovosti.edges || [];

    const mediaShorthand = mediaRes.prvaAgencijaOpt;
    return (
      <Suspense fallback={<Loading />}>
        <main className='relative w-full'>
          <Suspense>
            <HeroSection backgroundUrl={mediaShorthand.heroBg} />
          </Suspense>

          <Suspense>
            <AboutUsSection />
          </Suspense>

          <Suspense>
            <BannerSectionMainPage />
          </Suspense>
          {uslugeDataArrayShorthand.length > 0 && (
            <Suspense>
              <UslugeSection pageContent={uslugeDataArrayShorthand} lang={lang} />
            </Suspense>
          )}

          {newsDataArrayShorthand.length > 0 && (
            <Suspense>
              <NewsSection pageContent={newsDataArrayShorthand} lang={lang} />
            </Suspense>
          )}

          {baseCarouselDataShorthand && (
            <Suspense>
              <CarouselBase imageArray={baseCarouselDataShorthand} />
            </Suspense>
          )}
        </main>
      </Suspense>
    );
  } catch (error) {
    console.error('Error loading page content:', error);
    return <h2>Error loading content. Please try again later. {JSON.stringify(`Error: ${error}`)}</h2>;
  }
}
