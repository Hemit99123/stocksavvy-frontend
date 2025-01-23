import React, { FC } from 'react';

interface CTAButtonProps {
  link: string;
  text: string;
}

const CTAButton: FC<CTAButtonProps> = ({ link, text }) => {
  return (
    <a
      href={link}
      className="bg-green-700 hover:bg-green-800 text-white inline-flex items-center justify-center w-full px-5 py-3 text-sm space-x-2 font-medium text-center border border-gray-200 rounded-lg sm:w-auto focus:ring-4 focus:ring-gray-100"
    >
      <p className="font-bold">{text}</p>
    </a>
  );
};

export default CTAButton;
