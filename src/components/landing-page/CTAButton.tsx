import React, { FC } from 'react';

interface CTAButtonProps {
  link: string;
  text: string;
  icon: React.ElementType; // This allows `icon` to be a React component.
}

const CTAButton: FC<CTAButtonProps> = ({ link, text, icon: Icon }) => {
  return (
    <a
      href={link}
      className="inline-flex items-center justify-center w-full px-5 py-3 text-sm space-x-2 font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
    >
      {Icon && <Icon size={20} />}
      <p className="font-bold">{text}</p>
    </a>
  );
};

export default CTAButton;
