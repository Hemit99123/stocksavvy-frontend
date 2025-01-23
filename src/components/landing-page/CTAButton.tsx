import React, { FC } from 'react';

interface CTAButtonProps {
  link: string;
  text: string;
}

const CTAButton: FC<CTAButtonProps> = ({ link, text }) => {
  return (
    <a
      href={link}
      className="bg-black rounded-full text-white px-4 py-2 text-sm"
    >
      <p>{text}</p>
    </a>
  );
};

export default CTAButton;
