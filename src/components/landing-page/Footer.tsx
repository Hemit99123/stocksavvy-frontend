"use client"

import { Instagram, ArrowUp } from "lucide-react"
import Link from "next/link"
import { FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-green-500 pt-12 md:pt-24 pb-6 md:pb-8 px-4 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 md:mb-20">
            {/* Logo */}
            <div className="mb-4 sm:mb-0">
              <Link href="/" className="text-white text-2xl md:text-3xl font-bold">
                STOCK SAVVY
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="space-y-2">
              <h3 className="text-white font-semibold mb-2 md:hidden">Navigation</h3>
              <Link href="/websites" className="block text-white hover:opacity-80">
                Websites
              </Link>
              <Link href="/collections" className="block text-white hover:opacity-80">
                Collections
              </Link>
              <Link href="/elements" className="block text-white hover:opacity-80">
                Elements
              </Link>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-semibold mb-2 md:hidden">Resources</h3>
              <Link href="/academy" className="block text-white hover:opacity-80">
                Academy
              </Link>
              <Link href="/jobs" className="block text-white hover:opacity-80">
                Jobs
              </Link>
              <Link href="/market" className="block text-white hover:opacity-80">
                Market
              </Link>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-semibold mb-2 md:hidden">Support</h3>
              <Link href="/faqs" className="block text-white hover:opacity-80">
                FAQs
              </Link>
              <Link href="/about" className="block text-white hover:opacity-80">
                About Us
              </Link>
              <Link href="/contact" className="block text-white hover:opacity-80">
                Contact Us
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-8 md:mb-10">
            <p className="text-white/80 mb-1 md:mb-2 uppercase text-sm md:text-base">Got a question in mind?</p>
            <h2 className="text-white text-4xl sm:text-5xl md:text-7xl font-light">Let&apos;s talk</h2>
            <div className="text-white flex items-center mt-3 md:mt-4 space-x-3 md:space-x-4">
              <FaPhone className="text-sm md:text-base" />
              <p className="text-sm md:text-base">(123)-456-7890</p>
            </div>

            <div className="text-white flex items-center mt-2 md:mt-4 space-x-3 md:space-x-4">
              <FaMailBulk className="text-sm md:text-base" />
              <p className="text-sm md:text-base break-all md:break-normal">stocksavvy00@gmail.com</p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-white/80 hover:text-white text-xs sm:text-sm">
                Privacy Policy
              </Link>
            </div>

            <div className="flex items-center gap-4 md:gap-8">
              {/* Social Links */}
              <div className="flex gap-4 md:gap-6">
                <Link href="#" className="text-white hover:opacity-80">
                  <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>

              {/* Back to Top Link */}
              <Link
                href="#top"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="bg-white p-3 sm:p-4 md:p-6 rounded-lg md:rounded-xl hover:bg-white/90 text-green-500"
              >
                <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                <span className="sr-only">Back to top</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

