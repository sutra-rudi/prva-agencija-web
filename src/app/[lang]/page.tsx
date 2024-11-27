export const maxDuration = 60;
import dynamic from 'next/dynamic';
import { fetchMediaPaths } from '../utils/callMediaPaths';
import { fetchData } from '../utils/callApi';
import Loading from '../loading';
import prvaAgencijaHomepageQ from '../queries/prvaAgencijaFrontpageQuery';

const UslugeSection = dynamic(() => import('./UslugeSection'), { loading: () => <Loading /> });
const CarouselBase = dynamic(() => import('./CarouselBase'), { loading: () => <Loading /> });
const HeroSection = dynamic(() => import('./HeroSection'), { loading: () => <Loading /> });
const AboutUsSection = dynamic(() => import('./AboutUsSection'), { loading: () => <Loading /> });
const BannerSectionMainPage = dynamic(() => import('./BannerSectionMainPage'), { loading: () => <Loading /> });
const ContactSection = dynamic(() => import('./PrvaAgencijaContact'), { loading: () => <Loading /> });

export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  const { prvaAgencijaOpt } = await fetchMediaPaths();

  const datasetPrva = await fetchData(prvaAgencijaHomepageQ());

  const uslugeDataArrayShorthand = !datasetPrva.error ? datasetPrva.data.allUsluge?.edges || [] : [];

  const baseCarouselDataShorthand = !datasetPrva.error
    ? datasetPrva.data.karuselNaslovnica.edges[0].node.photoGallery30pcs || null
    : null;

  return (
    <main className='relative w-full min-h-dvh'>
      {prvaAgencijaOpt && <HeroSection backgroundUrl={prvaAgencijaOpt.heroBgUpdate} />}

      <AboutUsSection />

      {prvaAgencijaOpt && <BannerSectionMainPage mediaUrl={prvaAgencijaOpt.prvaStolPozadina} />}

      {uslugeDataArrayShorthand.length > 0 && <UslugeSection pageContent={uslugeDataArrayShorthand} lang={lang} />}

      <ContactSection formId={process.env.PRVA_AGENCIJA_FORMSPARK_KEY!} />

      <CarouselBase imageArray={baseCarouselDataShorthand} />
    </main>
  );
}
