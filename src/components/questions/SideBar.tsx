"use client"

import React, { useState } from 'react';
import { topics } from '@/data/topics';
import { Topic } from '@/types/topic';

const Sidebar = () => {

  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
  

  const handleTopicClick = (newTopic: Topic) => {
    setSelectedTopic(newTopic)
  }

  return (
    <div className="w-full md:w-1/3 pl-8 flex-shrink-0">
      {/* Topics List */}
      <div>
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={`bg-green-50 py-3 px-3 mb-2 cursor-pointer ${
              selectedTopic?.id === topic.id ? "border-l-4 border-green-500" : ""
            }`}
            onClick={() => handleTopicClick(topic)}
          >
            <p className="text-[11px] text-gray-400 uppercase">
              {topic.description}
            </p>
            <p className="text-[16px] font-semibold">{topic.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;