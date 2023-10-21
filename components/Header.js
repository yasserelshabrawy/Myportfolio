import Link from "next/link";
import Socials from './Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8"
        >
          {/* logo */}
          <Link className="" href={'/'} >
          <div>
            <h2 className="font-bold text-xl">Y A S S E R <span className="font-thin"> elshabrawy</span> <span className='text-red-600'>.</span> </h2>
            
          </div>
          </Link>
          {/* Socials */}
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;