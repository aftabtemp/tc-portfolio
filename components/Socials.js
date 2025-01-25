import Link from "next/link";
import {RiYoutubeLine, RiInstagramLine, RiTwitterLine, RiLinkedinLine } from 'react-icons/ri'
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg"> 
      <Link href={'https://www.youtube.com'} 
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      > 
        <RiYoutubeLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/thasneem-ciyad-67b38227b'}
        className="hover:text-accent transition-all duration-300"
      > 
        <RiLinkedinLine/>
      </Link>
      <Link href={'https://www.youtube.com'}
        className="hover:text-accent transition-all duration-300"
      > 
        <RiInstagramLine/>
      </Link>
      <Link href={'https://www.youtube.com'}
        className="hover:text-accent transition-all duration-300"
      > <RiTwitterLine/>
      </Link>
    </div>
  );
};

export default Socials;
