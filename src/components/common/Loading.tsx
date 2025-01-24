import React from 'react'

const Loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-200 via-lime-400 to-green-500">
        <img 
            src="/images/logo.png"
            className="h-80 w-80"
        />
        <h1 className="text-3xl">StockSavvy</h1>
    </div>
  )
}

export default Loading