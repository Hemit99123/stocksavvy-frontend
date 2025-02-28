import QuestionView from '@/components/questions/QuestionView'
import Sidebar from '@/components/questions/SideBar'
import { Hand } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { MdHomeFilled } from 'react-icons/md'

const Questions = () => {
  return (
    <div>
      {/* Header with Home link */}
      <div className="flex justify-between mx-8 mt-5 flex-col sm:flex-row">
        <Link href="/" className="flex justify-center text-green-500 text-lg mb-4 sm:mb-0">
          <div className='mt-1'>
            <MdHomeFilled /> 
          </div>
          <div className='ml-1'>
            • StockSavvy
          </div>
        </Link>

        <div className="flex text-gray-600 text-xs gap-2">
          <Hand size={16} />
          <div>
            Not feeling ready for this? Check out <span className="text-green-500 underline font-bold cursor-pointer">Financial guide</span>
          </div>
        </div>
      </div>

      {/* Heading and Introduction */}
      <div className="p-8">
        <h1 className="text-4xl sm:text-6xl font-bold">Stock Questions<span className="text-green-500 font-black">?</span></h1>
        <p className="text-gray-600 text-lg mb-2">Let&apos;s test your financial skills! Explore below...</p>
      </div>

      {/* Main content with Sidebar and Question View */}
      <div className="lg:flex flex-col lg:flex-row px-px justify-center items-center">
        <Sidebar/> {/* Fixed width for sidebar */}
        <div className="flex flex-grow justify-center"> {/* Center the QuestionView */}
          <QuestionView />
        </div>
      </div>
    </div>
  )
}

export default Questions
