"use client"

import { useState } from "react"

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("Information We Collect")

  const policyContent = [
    {
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our company and our users.",
    },
    {
      title: "Information Sharing and Disclosure",
      content:
        "We do not share your personal information with third parties except as described in this privacy policy.",
    },
    {
      title: "Data Retention",
      content:
        "We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy.",
    },
    {
      title: "Your Rights and Choices",
      content:
        "You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your data.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 mx-auto mb-4 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-600">Last updated: February 13, 2025</p>
        </header>

        <nav className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {policyContent.map((section) => (
              <button
                key={section.title}
                onClick={() => setActiveSection(section.title)}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === section.title ? "bg-green-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </nav>

        <div className="space-y-6">
          {policyContent.map((section) => (
            <div
              key={section.title}
              className={`bg-white shadow overflow-hidden sm:rounded-lg ${
                activeSection === section.title ? "border-2 border-green-600" : ""
              }`}
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{section.title}</h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <div className="sm:px-6 sm:py-5">
                  <p className="text-sm text-gray-500">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

