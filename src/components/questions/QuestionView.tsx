"use client"

import { useQuestionTypeStore } from '@/store/questions'
import GoogleClassroom from "../../../public/icons/classroom.svg"
import LinkedIn from "../../../public/icons/linkedin.svg"
import { MdOutlineOpenInNew } from "react-icons/md";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

const QuestionView = () => {

  const { type } = useQuestionTypeStore() // Use the store's state and setter
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Set state to true once client-side rendering occurs
  }, [])

  // Only use window object on the client-side
  const url = isClient ? encodeURIComponent(window.location.href) : "";

  const googleClassroomShare = `https://classroom.google.com/u/0/share?url=${url}`
  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  
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
            <Link href={googleClassroomShare} className='cursor-pointer flex items-center space-x-2 text-green-800 text-sm'>
              <GoogleClassroom />
              <p>Google Classroom</p>
              <MdOutlineOpenInNew />
            </Link>

            <Link href={linkedInShare} className='cursor-pointer flex items-center space-x-2 text-green-800 text-sm'>
              <LinkedIn />
              <p>LinkedIn</p>
              <MdOutlineOpenInNew />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuestionView
