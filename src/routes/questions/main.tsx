"use client"

import { useQuestionTypeStore } from "@/store/questions"
import { MdOutlineOpenInNew } from "react-icons/md"
import { useState, useEffect, useCallback } from "react"
import { CheckCircle, RotateCw } from "lucide-react"
import Sidebar from "@/components/common/SideBar"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import { SubmitButton } from "./components/SubmitButton"
import { useSubmitTypeStore } from "@/store/submit"
import httpHeader from "@/services/httpHeader"
import { Question } from "@/types/question"
import { handleCheckAuth } from "@/lib/auth"
import Loading from "@/components/common/Loading"
import PageHeader from "@/components/common/PageHeader"
import NotReadyYet from "./components/NotReadyYet"
import { Option } from "@/types/question"

const LetterCircle = ({ letter, isSelected }: { letter: string, isSelected: boolean }) => (
  <div className={`w-8 h-8 rounded-full border-2 ${isSelected ? 'border-green-500' : 'border-gray-300'} flex items-center justify-center`}>
    <span className={`text-lg ${isSelected ? 'text-green-500' : 'text-gray-600'}`}>{letter}</span>
  </div>
)

const QuestionView = () => {
  const { type } = useQuestionTypeStore()
  const { setType: setSubmitType } = useSubmitTypeStore.getState()

  const [isClient, setIsClient] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const [isLoading, setLoading] = useState(false)
  const [question, setQuestion] = useState<Question | null>(null)
  const [streak, setStreak] = useState(0)

  const handleGetRandomQuestion = useCallback(async () => {
    try {
      await handleCheckAuth()
      setLoading(true)
      const response = await httpHeader.get(`/question/get?type=${type}`)
      setQuestion(response.data.question)
      setSelectedOption(null) // Reset selection
    } finally {
      setLoading(false)
    }
  }, [type])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (type && type !== "None") {
      handleGetRandomQuestion()
    }
  }, [type, handleGetRandomQuestion])

  const url = isClient ? encodeURIComponent(window.location.href) : ""
  const googleClassroomShare = `https://classroom.google.com/u/0/share?url=${url}`
  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option)
  }

  const handleSubmit = () => {
    if (!selectedOption || !question) return

    setSubmitType("success")

    if (selectedOption.letter === question.correctAnswer) {
      toast.success("Correct Answer")
      setStreak(prev => prev + 1)
      handleGetRandomQuestion()
    } else {
      toast.error("Wrong Answer")
      setStreak(0)
    }

    setTimeout(() => {
      setSubmitType("idle")
    }, 1500)
  }

  return (
    <div>
      <PageHeader
        title="Financial Questions"
        description="Let's test your financial skills! Explore below..."
        sideComponent={<NotReadyYet />}
      />

      <div className="lg:flex flex-col lg:flex-row px-px justify-center">
        <Sidebar page="question" storeHook={useQuestionTypeStore} />

        <div className="overflow-auto w-11/12">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="flex items-center justify-center bg-green-100 rounded-lg shadow-md p-4 my-4">
                <motion.div
                  key={streak}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-3xl font-bold text-green-700"
                >
                  {streak}
                </motion.div>
                <span className="ml-3 text-lg font-medium text-green-600">🔥 Streak</span>
              </div>

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
                    <a href={googleClassroomShare} className="cursor-pointer flex items-center space-x-2 text-green-800 text-sm">
                    <svg fill="#286A4D" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Google Classroom icon</title><path d="M1.6367 1.6367C.7322 1.6367 0 2.369 0 3.2734v17.4532c0 .9045.7322 1.6367 1.6367 1.6367h20.7266c.9045 0 1.6367-.7322 1.6367-1.6367V3.2734c0-.9045-.7322-1.6367-1.6367-1.6367H1.6367zm.545 2.1817h19.6367v16.3632h-2.7266v-1.0898h-4.9102v1.0898h-12V3.8184zM12 8.1816c-.9046 0-1.6367.7322-1.6367 1.6368 0 .9045.7321 1.6367 1.6367 1.6367.9046 0 1.6367-.7322 1.6367-1.6367 0-.9046-.7321-1.6368-1.6367-1.6368zm-4.3633 1.9102c-.6773 0-1.2285.5493-1.2285 1.2266 0 .6772.5512 1.2265 1.2285 1.2265.6773 0 1.2266-.5493 1.2266-1.2265 0-.6773-.5493-1.2266-1.2266-1.2266zm8.7266 0c-.6773 0-1.2266.5493-1.2266 1.2266 0 .6772.5493 1.2265 1.2266 1.2265.6773 0 1.2285-.5493 1.2285-1.2265 0-.6773-.5512-1.2266-1.2285-1.2266zM12 12.5449c-1.179 0-2.4128.4012-3.1484 1.0059-.384-.1198-.8043-.1875-1.2149-.1875-1.3136 0-2.7285.695-2.7285 1.5586v.8965h14.1836v-.8965c0-.8637-1.4149-1.5586-2.7285-1.5586-.4106 0-.831.0677-1.2149.1875-.7356-.6047-1.9694-1.0059-3.1484-1.0059Z"></path></g></svg> <p>Google Classroom</p> <MdOutlineOpenInNew />
                    </a>

                    <a href={linkedInShare} className="cursor-pointer flex items-center space-x-2 text-green-800 text-sm">
                    <svg fill="#286A4D" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Google Classroom icon</title><path d="M1.6367 1.6367C.7322 1.6367 0 2.369 0 3.2734v17.4532c0 .9045.7322 1.6367 1.6367 1.6367h20.7266c.9045 0 1.6367-.7322 1.6367-1.6367V3.2734c0-.9045-.7322-1.6367-1.6367-1.6367H1.6367zm.545 2.1817h19.6367v16.3632h-2.7266v-1.0898h-4.9102v1.0898h-12V3.8184zM12 8.1816c-.9046 0-1.6367.7322-1.6367 1.6368 0 .9045.7321 1.6367 1.6367 1.6367.9046 0 1.6367-.7322 1.6367-1.6367 0-.9046-.7321-1.6368-1.6367-1.6368zm-4.3633 1.9102c-.6773 0-1.2285.5493-1.2285 1.2266 0 .6772.5512 1.2265 1.2285 1.2265.6773 0 1.2266-.5493 1.2266-1.2265 0-.6773-.5493-1.2266-1.2266-1.2266zm8.7266 0c-.6773 0-1.2266.5493-1.2266 1.2266 0 .6772.5493 1.2265 1.2266 1.2265.6773 0 1.2285-.5493 1.2285-1.2265 0-.6773-.5512-1.2266-1.2285-1.2266zM12 12.5449c-1.179 0-2.4128.4012-3.1484 1.0059-.384-.1198-.8043-.1875-1.2149-.1875-1.3136 0-2.7285.695-2.7285 1.5586v.8965h14.1836v-.8965c0-.8637-1.4149-1.5586-2.7285-1.5586-.4106 0-.831.0677-1.2149.1875-.7356-.6047-1.9694-1.0059-3.1484-1.0059Z"></path></g></svg><p>LinkedIn</p> <MdOutlineOpenInNew />
                    </a>

                    <button onClick={handleGetRandomQuestion}><RotateCw size={20} /></button>
                  </div>

                  {/* QUESTION */}
                  <div className="px-28 mt-10">
                    <p className="text-lg font-medium">{question?.question}</p>
                    <p className="mt-5 text-sm font-bold text-green-400">Select one:</p>
                    <hr className="h-px my-2 bg-green-200 border-0" />

                    <div className="space-y-3 mt-4">
                      {question?.options?.map((option: Option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleOptionSelect(option)}
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
                            <div className="flex-1 ml-4 flex justify-between items-center">
                              <h3 className={`font-medium ${selectedOption?.letter === option.letter ? "text-green-700" : "text-gray-800"}`}>
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

                    <SubmitButton handleSubmit={handleSubmit} />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuestionView
