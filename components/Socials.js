import Link from "next/link";
import {RiInstagramLine, RiTwitterLine, RiLinkedinLine,RiBehanceLine,RiWhatsappLine } from 'react-icons/ri'
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl"> 
      <Link href={'https://www.linkedin.com/in/thasneemciyad/'}
        className="hover:text-accent transition-all duration-300"
        target="_blank" rel="noopener noreferrer"
      > 
        <RiLinkedinLine/>
      </Link>
      <Link href={'https://www.instagram.com/thasneem_sw/'}
        className="hover:text-accent transition-all duration-300"
        target="_blank" rel="noopener noreferrer"
      > 
        <RiInstagramLine/>
      </Link>
      <Link href={'https://wa.me/qr/VXM7ADDDBFOCC1'}
        className="hover:text-accent transition-all duration-300"
        target="_blank" rel="noopener noreferrer"
      > <RiWhatsappLine/>
      </Link>
    </div>
  );
};

export default Socials;
