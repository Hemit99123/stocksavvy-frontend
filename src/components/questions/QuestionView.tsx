"use client"

import { useQuestionTypeStore } from '@/store/questions'
import React from 'react'

const QuestionView = () => {
  const { type } = useQuestionTypeStore() // Use the store's state and setter

  return (
    <div className="flex items-center">
      {type === "None" ? (
        <div className="text-center">
            <hr className="w-52 h-0.5 mx-auto bg-gray-300 border-0 rounded-sm my-2" />
            <h1 className="font-bold text-lg">Start with a topic</h1>
            <p className="text-gray-500">Get started through selecting a topic.</p>
        </div>
      ) : (
        <div>chosen: {type}</div>
      )}
    </div>
  )
}

export default QuestionView
