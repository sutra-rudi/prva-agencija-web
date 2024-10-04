import Image from 'next/image';
import Marquee from 'react-fast-marquee';
interface CarouselBase {
  imageArray: any;
}
const CarouselBase = ({ imageArray }: CarouselBase) => {
  const prepGallery = Object.values(imageArray);

  return (
    <section>
      <Marquee direction='left' speed={148}>
        {prepGallery.map((galItem: any) => (
          <div key={galItem.node.id} className='w-[400px] h-[300px] relative'>
            <Image
              src={galItem.node.sourceUrl}
              alt='carausel image'
              fill
              loading='lazy'
              className='object-cover object-center block'
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default CarouselBase;
