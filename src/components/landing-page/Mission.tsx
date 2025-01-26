import React from 'react'
import Header from './common/Header'
import SeperatorItem from './common/SeperatorItem'

const Mission = () => {
  return (
    <div>
        <Header 
            smalltext="Our mission"
            title="Defining our impact."
        />

        <div className="flex justify-center items-center bg-gradient-to-br from-green-200 to-green-500 py-1.5 space-x-4 mt-5">
            <SeperatorItem 
                text="Stocks"
            />
            <SeperatorItem 
                text="Money"
            />
            <SeperatorItem 
                text="Investments"
            />
        </div>

        <div className="bg-[#121826] text-white flex justify-center items-center gap-10 py-32">
            <div>
                <div className="grid grid-cols-2 gap-6 max-w-2xl text-black">
                    <div className="bg-green-400 rounded-lg p-6 transform transition-all duration-500" style={{ transform: 'translateY(-15px)' }}>
                        <h2 className="text-4xl font-bold mb-2">Empowering Students</h2>
                        <p>Our mission is to provide high school students with the tools and knowledge to take control of their financial futures.</p>
                    </div>
                    <div className="bg-yellow-400 rounded-lg p-6 transform transition-all duration-500" style={{ transform: 'translateY(15px)' }}>
                        <h2 className="text-4xl font-bold mb-2">Building Strong Foundations</h2>
                        <p>We teach fundamental financial concepts such as budgeting, saving, and investing, to set students up for success.</p>
                    </div>
                    <div className="bg-yellow-400 rounded-lg p-6 transform transition-all duration-500" style={{ transform: 'translateY(-15px)' }}>
                        <h2 className="text-4xl font-bold mb-2">Inspiring Confidence</h2>
                        <p>We aim to inspire confidence in students, helping them understand the power of financial decision-making and how to apply it in their lives.</p>
                    </div>
                    <div className="bg-green-400 rounded-lg p-6 transform transition-all duration-500" style={{ transform: 'translateY(15px)' }}>
                        <h2 className="text-4xl font-bold mb-2">Creating Opportunities</h2>
                        <p>Through education and guidance, we open the door to a wide range of financial opportunities for young people to explore and benefit from.</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-4xl mb-3">We are passionate</h1>
                <p className="max-w-lg">
                    At StockSavvy, we are committed to building a generation of financially literate individuals who are empowered to make sound financial decisions, contribute to their communities, and pave the way for a more secure future.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Mission
