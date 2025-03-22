import { FC } from "react";

interface CTAButtonProps {
  link: string;
  text: string;
  isTransparent: boolean;
}

const CTAButton: FC<CTAButtonProps> = ({ link, text, isTransparent }) => {
  return (
    <a
      href={link}
      className={`items-center font-bold rounded-full text-sm px-4 py-2 transition-opacity duration-300 ${isTransparent ? "bg-transparent border border-white text-white hover:opacity-80" : "bg-black text-white hover:opacity-80"}`}
    >
      <p>{text}</p>
    </a>
  );
};

export default CTAButton;
