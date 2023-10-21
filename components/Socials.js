import Link from "next/link";
import {
  RiLinkedinFill,
  RiGithubLine,
  RiFacebookFill,
  RiWhatsappLine,
  RiMailLine
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex gap-x-8 text-xl" >
      <Link
        href={"https://www.linkedin.com/in/yasser-elshabrawy-377838257/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={"https://www.facebook.com/yasser.alshabrawi/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookFill />
      </Link>
      <Link
        href={"https://wa.me/01004939793"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href={"https://github.com/yasserelshabrawy"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href="mailto:yasser.elshabrawy98@gmail.com"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailLine />
      </Link>
    </div>
  );
};

export default Socials;