import React from 'react'

interface MissionItemProps {
    isLifted: boolean;
    title: string;
    text: string;
    color: "yellow" | "green";
}

const MissionItem: React.FC<MissionItemProps> = ({ color, title, text, isLifted }) => {
  return (
    <div 
    className={`${color === "green" ? "bg-green-400" : "bg-yellow-400"} 
                rounded-lg p-6`} 
    style={{ transform: isLifted ? 'translateY(-15px)' : 'translateY(15px)' }}
    >
    <h2 className="text-4xl font-bold mb-2">{title}</h2>
    <p>{text}</p>
    </div>
  );
}

export default MissionItem;
