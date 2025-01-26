import React from 'react'

interface SeperatorItemProps {
    text: string;
}
const SeperatorItem: React.FC<SeperatorItemProps> = ({text}) => {
  return (
    <div className="bg-white rounded-full w-60 text-center text-sm font-bold py-1 shadow-md">
        {text}
    </div>  
    )
}

export default SeperatorItem