"use client"

import { useQuestionTypeStore } from "@/store/questions"
import GoogleClassroom from "@/public/icons/classroom.svg"
import LinkedIn from "@/public/icons/linkedin.svg"
import { MdOutlineOpenInNew } from "react-icons/md"
import { useState, useEffect } from "react"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { toast, ToastContainer } from "react-toastify"
import { Option } from "@/types/option"
import { SubmitButton } from "./SubmitButton"
import { useSubmitTypeStore } from "@/store/submit"
import httpHeader from "@/services/httpHeader"
import { Question } from "@/types/question"
import { useRouter } from "next/navigation"

const LetterCircle = ({ letter, isSelected }: { letter: string, isSelected: boolean }) => (
  <div className={`w-8 h-8 rounded-full border-2 ${isSelected ? 'border-green-500' : 'border-gray-300'} flex items-center justify-center`}>
    <span className={`text-lg ${isSelected ? 'text-green-500' : 'text-gray-600'}`}>{letter}</span>
  </div>
);

const QuestionView = () => {
  const { type } = useQuestionTypeStore() // Use the store's state and setter (only rerenders this, saving efficiency)
  const { setType: setSubmitType } = useSubmitTypeStore.getState()
  const [isClient, setIsClient] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const [question, setQuestion] = useState<Question>()
  const router = useRouter()

  useEffect(() => {
    setIsClient(true) // Set state to true once client-side rendering occurs (after component mounted)
  }, [])

  useEffect(() => {
    const handleGetRandomQuestion = async () => {
      try {
        const response = await httpHeader.get(`/question/get?type=${type}`);
        setQuestion(response.data.question);
        /* eslint-disable  @typescript-eslint/no-explicit-any */
      } catch (error: any) {
        if (error.response?.status === 401) {
          const shouldRedirect = prompt("Not authenticated, would you like to login? Y/N:")?.toUpperCase();

          if (shouldRedirect == "Y") {
            router.push("/login")
          }
          
        } else {
          console.error("Error fetching question:", error);
          alert("Something went wrong, please try again later.");
        }
      }
    };    

    if (type !== "None") {
      handleGetRandomQuestion();
    }
  }, [type])

  // Only use window object on the client-side
  const url = isClient ? encodeURIComponent(window.location.href) : ""

  const googleClassroomShare = `https://classroom.google.com/u/0/share?url=${url}`
  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option)
  }
  const handleSubmit = () => {
    setSubmitType("success");
  
    if (selectedOption?.letter === question?.correctAnswer) {
      toast.success("Correct Answer");
    } else {
      toast.error("Wrong Answer");
    }

    setTimeout(() => {
      setSubmitType("idle")
    }, 1500)
  };
  
  return (
    <div className="overflow-auto">
      <ToastContainer />
      {type === "None" ? (
        <div className="text-center">
          <hr className="w-52 h-0.5 mx-auto bg-gray-300 border-0 rounded-sm my-2" />
          <h1 className="font-bold text-lg">Start with a topic</h1>
          <p className="text-gray-500">Get started by selecting a topic.</p>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-3xl font-bold mb-2">{type}</h1>

          {/* HEADER */}
          <div className="flex justify-center space-x-10">
            <Link
              href={googleClassroomShare}
              className="cursor-pointer flex items-center space-x-2 text-green-800 text-sm"
            >
              <GoogleClassroom />
              <p>Google Classroom</p>
              <MdOutlineOpenInNew />
            </Link>

            <Link href={linkedInShare} className="cursor-pointer flex items-center space-x-2 text-green-800 text-sm">
              <LinkedIn />
              <p>LinkedIn</p>
              <MdOutlineOpenInNew />
            </Link>
          </div>

          {/* QUESTION PART */}
          <div className="px-28 mt-10">
            <p className="text-lg font-medium">
              {question?.question}
            </p>

            <p className="mt-5 text-sm font-bold text-green-400">Select one:</p>
            <hr className="h-px my-2 bg-green-200 border-0" />

            <div className="space-y-3 mt-4">
              {question?.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleOptionSelect(option as Option)}
                  className={`w-full text-left rounded-xl transition-all duration-200 overflow-hidden ${
                    selectedOption?.letter === option.letter
                      ? "ring-2 ring-green-500 bg-green-50"
                      : "hover:bg-gray-50 border border-gray-200"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center p-4">
                    <LetterCircle letter={option.letter} isSelected={selectedOption?.letter === option.letter} />
                    <div className="flex-1 ml-4">
                      <div className="flex justify-between items-center">
                        <h3
                          className={`font-medium ${selectedOption?.letter === option.letter ? "text-green-700" : "text-gray-800"}`}
                        >
                          {option.text}
                        </h3>
                        {selectedOption?.letter === option.letter && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          >
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                  {selectedOption?.letter === option.letter && (
                    <motion.div
                      className="h-1 bg-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <SubmitButton handleSubmit={handleSubmit}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuestionView
