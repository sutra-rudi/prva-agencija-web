interface AppHeaderInterface {
  logoUrlLight: string | any;
  logoUrlDark: string | any;
}

const AppHeader = ({ logoUrlDark }: AppHeaderInterface) => {
  return (
    <nav className={`bg-transparent absolute z-50 w-full top-0`}>
      <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0 pb-4 pt-12'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='shrink-0'>
              <a href={`/hr`} title='' className='block w-52 h-12 relative'>
                <picture>
                  <img
                    className='dark:hidden block w-full h-full object-center object-cover'
                    src={logoUrlDark}
                    alt='Prva Agencija logo'
                    width={200}
                    height={50}
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
