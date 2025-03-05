"use client"

import { useQuestionTypeStore } from '@/store/questions'
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineOpenInNew } from "react-icons/md";

import React from 'react'

const QuestionView = () => {
  const { type } = useQuestionTypeStore() // Use the store's state and setter

  return (
    <div>
      {type === "None" ? (
        <div className="text-center">
            <hr className="w-52 h-0.5 mx-auto bg-gray-300 border-0 rounded-sm my-2" />
            <h1 className="font-bold text-lg">Start with a topic</h1>
            <p className="text-gray-500">Get started through selecting a topic.</p>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-3xl font-bold mb-2">{type}</h1>

          <div className='flex space-x-10'>
            <div className='cursor-pointer flex items-center space-x-2 text-green-800 text-sm'>
              <SiGoogleclassroom />
              <p>Google Classroom</p>
              <MdOutlineOpenInNew />
            </div>

            <div className='cursor-pointer flex items-center space-x-2 text-green-800 text-sm'>
              <SiGoogleclassroom />
              <p>Google Classroom</p>
              <MdOutlineOpenInNew />
            </div>
          </div>


        </div>
      )}
    </div>
  )
}

export default QuestionView
