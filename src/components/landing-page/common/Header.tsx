import React from 'react'

interface HeaderProps {
    smalltext: string;
    title: string;
}
const Header: React.FC<HeaderProps> = ({smalltext, title}) => {
  return (
    <div className="text-center">
    <div className="flex items-center justify-center space-x-4 mb-4">
      <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      <h2 className="text-sm lg:text-lg font-medium text-green-600">
        {smalltext}
      </h2>
      <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
    </div>
    <h3 className="text-2xl lg:text-4xl font-semibold">
        {title}
    </h3>
    </div>
  )
}

export default Header