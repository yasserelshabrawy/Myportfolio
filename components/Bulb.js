import Image from "next/image";



const Bulb = () => {
  return <div className="absolute -left-20 -bottom-12 rotate-12 animate-pulse duration-75 z-10 w-[150px] ">
    {/* bulb: filter: drop-shadow(9px 5px 17px #dc2e2e); */}
    <Image src={'/bulb.png'} width={260} height={200} className="w-full h-full bulb" alt=""/>
  </div>;
};

export default Bulb;
