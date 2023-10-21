import Image from "next/image";


const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none' >
    <Image src={'/yasserbe-removebg.png'} width={337} height={578} alt="" className='translate-z-0  ' />
  </div>;
};

export default Avatar;