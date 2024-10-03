import StolPozadina from '../images/prva-stol-pozadina.png';
import Image from 'next/image';
const BannerSectionMainPage = () => {
  return (
    <section className='w-full relative h-[336px]'>
      <Image
        src={StolPozadina}
        alt='Picture of a table in office'
        fill
        className='object-cover object-center block aspect-video'
      />
    </section>
  );
};

export default BannerSectionMainPage;
