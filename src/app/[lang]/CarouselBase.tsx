import Marquee from 'react-fast-marquee';
interface CarouselBase {
  imageArray: any;
}
const CarouselBase = ({ imageArray }: CarouselBase) => {
  const arr = Object.values(imageArray);
  const prepGallery = [...arr, arr].filter((g) => g).slice(0, 4);

  return (
    <section>
      <Marquee direction='left' speed={148}>
        {prepGallery.map((galItem: any) => (
          <picture key={galItem.node.id} className='w-[400px] h-[300px]'>
            <img
              src={galItem.node.sourceUrl}
              alt='carausel image'
              loading='lazy'
              width={400}
              height={300}
              className='object-cover object-center block h-full max-w-full w-full aspect-auto'
            />
          </picture>
        ))}
      </Marquee>
    </section>
  );
};

export default CarouselBase;
