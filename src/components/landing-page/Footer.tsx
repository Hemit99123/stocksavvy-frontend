import React from 'react'
import Spacer from '../common/Spacer'
import { FaInstagram } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {

  const getCurrentYear = () => {
        return new Date().getFullYear()
  }

  return (
    <div className="bg-[#d5d5d5] rounded-t-3xl">
        <div className="text-right md:text-left md:flex md:justify-between p-10 mb-56 space-y-11 lg:space-y-0">
            <div className="text-2xl md:text-3xl lg:text-5xl font-medium">
                <h3>SMART</h3>
                <h3>MONEY</h3>
                <h3>CHOICES</h3>
            </div>

            <a className="flex items-center self-start cursor-pointer space-x-2 text-sm md:text-base lg:text-lg" href="https://www.instagram.com/stock.savvy_/">
                <FaInstagram />
                <p className="font-medium">Instagram</p>
                <FiArrowUpRight className="font-light" />
            </a>

            <div className="text-left md:text-right">
                <p className="md:text-lg lg:text-xl mb-1 font-semibold">Get in touch!</p>
                <p className="text-sm md:text-base underline cursor-pointer">stocksavvy00@gmail.com </p>
                <p className="text-sm md:text-base underline cursor-pointer">123 456 7890</p>
            </div>
        </div>

        <h1 className="font-black text-center text-10xl">STOCKSAVVY</h1>
        <p className="text-right mr-8 text-xs md:text-sm">© StockSavvy {getCurrentYear()}</p>
        <Spacer />
    </div>
  )
}

export default Footer