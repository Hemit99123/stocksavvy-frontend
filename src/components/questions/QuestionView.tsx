import { useQuestionTypeStore } from '@/store/questions'
import React from 'react'

const QuestionView = () => {
  const { type } = useQuestionTypeStore() // Use the store's state and setter

  return (
    <div>
      {type === "None" ? (
        <div>None chosen</div>
      ) : (
        <div>chosen: {type}</div>
      )}
    </div>
  )
}

export default QuestionView
