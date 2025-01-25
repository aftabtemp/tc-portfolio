import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image 
        src={'/avatar2.png'} 
        width={700} 
        height={600}
        alt="profile"
        className="translate-z-0 h-full w-full"
      />
    </div>
  );
};

export default Avatar;
