import { Hand } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { MdHomeFilled } from 'react-icons/md'

const Questions = () => {
  return (
    <div>
        <div className="flex justify-between mx-8 mt-5">
            <Link href="/" className="flex justify-center text-green-500 text-lg">
              <div className='mt-1'>
                <MdHomeFilled /> 
              </div>
              <div>
                • StockSavvy
              </div>
            </Link>

            <div className="flex text-gray-600 text-xs gap-2">
              <Hand size={16}/>
              <div>
                Not feeling ready for this? Check out <span className="text-green-500 underline font-bold cursor-pointer">Financial guide</span>
              </div>
            </div>
        </div>

        <div className="p-8">
          <h1 className="text-6xl font-bold">Stock Questions<span className="text-green-500 font-black">?</span></h1>
          <p className="text-gray-600 text-lg mb-2">Let&apos;s test your financial skills!</p>
        </div>
    </div>
  )
}

export default Questions