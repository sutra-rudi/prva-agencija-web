import { Suspense } from 'react';
import { getAllBlogsQuery } from '../queries/getAllBlogsQuery';
import { getAllNewsQuery } from '../queries/getAllNewsQuery';
import BlogSection from './BlogSection';
import NewsSection from './NewsSection';
import LocationsSection from './LocationsSection';
import { getAllLocationsQuery } from '../queries/getAllLocationsQuery';
import BrojcaniciSection from './BrojcaniciSection';
import { getAllBrojcaniciQuery } from '../queries/getAllBrojcaniciQuery';
import SingleFaqSection from './SingleFaqSection';
import { getAllFaqSinglesQuery } from '../queries/getAllFaqSingles';
import { getAllUslugeQuery } from '../queries/getAllUslugeQuery';
import UslugeSection from './UslugeSection';
import PartnersSection from './PartnersSection';
import { getAllLogotipiPartneraQuery } from '../queries/getAllLogotipiPartnera';
import { getAllCarouselBaseQuery } from '../queries/getAllCarouselBase';
import CarouselBase from './CarouselBase';

export const maxDuration = 300;

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  const getAllblogs = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllBlogsQuery(lang),
    }),
    cache: 'no-cache',
  });

  const parseDataBlog = await getAllblogs.json();

  const getAllNews = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllNewsQuery(lang),
    }),
    cache: 'no-cache',
  });

  const parseDataNews = await getAllNews.json();

  const getAllLocations = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllLocationsQuery,
    }),
    cache: 'no-cache',
  });

  const parseDataLocations = await getAllLocations.json();

  const getAllBrojcanici = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllBrojcaniciQuery(lang),
    }),
    cache: 'no-cache',
  });

  const parseDataBrojcanici = await getAllBrojcanici.json();

  const getAllFaqSingle = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllFaqSinglesQuery(lang),
    }),
    cache: 'no-cache',
  });

  const parseDataFaqSingle = await getAllFaqSingle.json();

  const getAllUsluge = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllUslugeQuery(lang),
    }),
    cache: 'no-cache',
  });

  const parseDataUsluge = await getAllUsluge.json();

  const getAllPartnersLogos = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllLogotipiPartneraQuery(),
    }),
    cache: 'no-cache',
  });

  const parseDataPartnersLogos = await getAllPartnersLogos.json();

  const getAllCarouselBase = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllCarouselBaseQuery(),
    }),
    cache: 'no-cache',
  });

  const parseDataCarouselQuery = await getAllCarouselBase.json();

  ///
  const blogDataArrayShorthand = parseDataBlog.data.allBlog.edges;
  const newsDataArrayShorthand = parseDataNews.data.allNovosti.edges;
  const brojcaniciDataArrayShorthand = parseDataBrojcanici.data.allBrojcanici.edges;
  const faqSingleDataArrayShorthand = parseDataFaqSingle.data.allFAQPojedinacno.edges;
  const uslugeDataArrayShorthand = parseDataUsluge.data.allUsluge.edges;
  const logotipiPartneraDataArrayShorthand = parseDataPartnersLogos.data.logotipiPartneraKlijenata.edges;
  const baseCarouselDataShorthand = parseDataCarouselQuery.data.karuselNaslovnica.edges[0].node;

  return (
    <Suspense fallback={<h2>LOADING...</h2>}>
      <main>
        <BlogSection pageContent={blogDataArrayShorthand} lang={lang} />
        <NewsSection pageContent={newsDataArrayShorthand} lang={lang} />
        <LocationsSection pageContent={parseDataLocations} />
        <BrojcaniciSection pageContent={brojcaniciDataArrayShorthand} lang={lang} />
        <SingleFaqSection pageContent={faqSingleDataArrayShorthand} lang={lang} />
        <UslugeSection pageContent={uslugeDataArrayShorthand} lang={lang} />
        <PartnersSection pageContent={logotipiPartneraDataArrayShorthand} />
        <CarouselBase imageArray={baseCarouselDataShorthand} />
      </main>
    </Suspense>
  );
}
