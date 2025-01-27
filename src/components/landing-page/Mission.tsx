import React from 'react'
import Header from './common/Header'
import MissionItem from './common/MissionItem'

const Mission = () => {
  return (
    <div className="bg-[#121826]">

        <div className="pt-10">
            <Header 
                smalltext="Our mission"
                title="Defining our impact."
                isWhite={true}
            />
        </div>

        <div className="text-white flex flex-col lg:flex-row justify-center items-center gap-10 py-28 ">
            <div className="max-w-full lg:max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                    <MissionItem
                        color="green"
                        title="Empowering Students"
                        text="Our mission is to provide high school students with the tools and knowledge to take control of their financial futures."
                        isLifted={true}
                    />
                    <MissionItem
                        color="yellow"
                        title="Building Strong Foundations"
                        text="We teach fundamental financial concepts such as budgeting, saving, and investing, to set students up for success."
                        isLifted={false} 
                    />
                    <MissionItem
                        color="yellow"
                        title="Inspiring Confidence"
                        text="We aim to inspire confidence in students, helping them understand the power of financial decision-making and how to apply it in their lives."
                        isLifted={true}
                    />
                    <MissionItem
                        color="green"
                        title="Creating Opportunities"
                        text="Through education and guidance, we open the door to a wide range of financial opportunities for young people to explore and benefit from."
                        isLifted={false} 
                    />
                </div>
            </div>
            <div className="text-center lg:text-left">
                <h1 className="font-bold text-4xl mb-3">We are passionate</h1>
                <p className="max-w-full lg:max-w-lg mx-auto lg:mx-0">
                    At StockSavvy, we are committed to building a generation of financially literate individuals who are empowered to make sound financial decisions, contribute to their communities, and pave the way for a more secure future.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Mission
