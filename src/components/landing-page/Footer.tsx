import { Facebook, Youtube, Instagram, Twitter, ArrowUp } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full">

      {/* Main Footer */}
      <div className="bg-green-500 pt-24 pb-8 px-12">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Links Grid */}
          <div className="grid grid-cols-4 gap-8 mb-20">
            {/* Logo */}
            <div>
              <Link href="/" className="text-white text-3xl font-bold">
                STOCK SAVVY
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
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

            <div className="space-y-4">
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

            <div className="space-y-4">
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
          <div className="mb-20">
            <p className="text-white/80 mb-2">GOT A PROJECT IN MIND?</p>
            <h2 className="text-white text-7xl font-light">Let&apos;s talk</h2>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8 flex justify-between items-center">
            <div className="flex gap-6">
              <Link href="/cookies" className="text-white/80 hover:text-white text-sm">
                Cookies Policy
              </Link>
              <Link href="/legal" className="text-white/80 hover:text-white text-sm">
                Legal Terms
              </Link>
              <Link href="/privacy" className="text-white/80 hover:text-white text-sm">
                Privacy Policy
              </Link>
            </div>

            <div className="flex items-center gap-8">
              {/* Social Links */}
              <div className="flex gap-6">
                <Link href="#" className="text-white hover:opacity-80">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-white hover:opacity-80">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-white hover:opacity-80">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-white hover:opacity-80">
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>

              {/* Back to Top Link */}
              <Link
                href="#top"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="bg-white p-6 rounded-xl hover:bg-white/90 text-[#6B46C1]"
              >
                <ArrowUp className="h-6 w-6" />
                <span className="sr-only">Back to top</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;