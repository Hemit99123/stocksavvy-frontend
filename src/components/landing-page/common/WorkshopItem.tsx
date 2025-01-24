import React from 'react';

interface WorkshopItemProps {
  color: string;
  title: string;
}

const WorkshopItem: React.FC<WorkshopItemProps> = ({ color, title }) => {
  return (
    <div
      className="flex items-center justify-center rounded-3xl text-center"
      style={{
        backgroundColor: color,
        width: 300,
        height: 400,
      }}
    >
      <h1 className="text-white font-bold text-lg">{title}</h1>
    </div>
  );
};

export default WorkshopItem;
