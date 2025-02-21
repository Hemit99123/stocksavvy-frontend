import { Hand } from 'lucide-react'
import React from 'react'
import { MdHomeFilled } from 'react-icons/md'

const Questions = () => {
  return (
    <div>
        <div className="flex justify-between mx-8 mt-5">
            <div className="flex justify-center text-green-500">
              <div className='mt-0.5'>
                <MdHomeFilled /> 
              </div>
              <div>
                • StockSavvy
              </div>
            </div>

            <div className="flex text-gray-600 text-xs gap-2">
              <Hand size={16}/>
              <div>
                Not feeling ready for this? Check out <span className="text-green-500 underline font-bold cursor-pointer">Financial guide</span>
              </div>
            </div>
        </div>

        <div className="p-8">
          <h1 className="text-6xl font-bold">Stock Questions</h1>
          <p className="text-gray-600 text-lg mb-2">Let&apos;s test your financial skills!</p>
        </div>
    </div>
  )
}

export default Questions