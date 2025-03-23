import { Header } from "@/components/forum/Header"
import httpHeader from "@/services/httpHeader"
import { Forum } from "@/types/forum"
import { PencilIcon, Trash } from "lucide-react"
import { useEffect, useState } from "react"

export default function Me() {
  const [questions, setQuestions] = useState<Forum[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editingQuestion, setEditingQuestion] = useState<Forum | null>(null)
  const [newQuestion, setNewQuestion] = useState("")
  const [newContent, setNewContent] = useState("")
  const [showUpdate, setShowUpdate] = useState(true)

  useEffect(() => {
    async function fetchUserQuestions() {
      try {
        setIsLoading(true)
        const response = await httpHeader.get("/forum/user-questions")
        setQuestions(response.data.questions)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserQuestions()
  }, [])

  const handleDeleteForum = async (id: number) => {
    try {
      await httpHeader.delete("/forum/delete", { data: { id } })
      // Update state by removing the deleted forum
      setQuestions((prevQuestions) =>
        prevQuestions.filter((question) => question.id !== id)
      )
    } catch (error) {
      console.error("Error deleting forum:", error)
    }
  }

  const handleEditForum = (question: Forum) => {
    setShowUpdate((prev) => !prev)
    setEditingQuestion(question)
    setNewQuestion(question.question)
    setNewContent(question.content)
  }

  const handleUpdateForum = async () => {
    if (!newQuestion || !newContent) return

    try {
      await httpHeader.put("/forum/update", {
        id: editingQuestion?.id,
        question: newQuestion,
        content: newContent,
      })

      // Update the question in the state
      setQuestions((prevQuestions) =>
        prevQuestions.map((q) =>
          q.id === editingQuestion?.id
            ? { ...q, question: newQuestion, content: newContent }
            : q
        )
      )
      setEditingQuestion(null)
    } catch (error) {
      console.error("Error updating forum:", error)
    }
  }

  return (
    <>
      <Header />
      <div className="bg-green-50 min-h-screen p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">My Posts</h1>

          {isLoading && (
            <div className="flex justify-center items-center min-h-[50vh]">
              <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {!isLoading && !error && questions.length === 0 && (
            <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-green-200">
              <h2 className="text-xl font-medium text-green-700 mb-2">No questions found</h2>
              <p className="text-green-600">You haven't asked any questions yet.</p>
            </div>
          )}

          {!isLoading && !error && questions.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {questions.map((question) => (
                <div
                  key={question.id}
                  className="bg-white rounded-lg overflow-hidden border border-green-200 hover:shadow-md transition-shadow"
                >
                  <div className="p-4">
                    <p className="text-green-700 line-clamp-3">{question.question}</p>

                    <PencilIcon onClick={() => handleEditForum(question)} />
                    <Trash onClick={() => handleDeleteForum(question.id)} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Edit Form */}
          {showUpdate && (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-green-200 mt-6">
              <h2 className="text-xl font-medium text-green-700 mb-4">Edit Question</h2>
              <div className="mb-4">
                <label htmlFor="question" className="block text-green-700">Question</label>
                <input
                  type="text"
                  id="question"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  className="w-full p-2 border border-green-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block text-green-700">Content</label>
                <textarea
                  id="content"
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  rows={4}
                  className="w-full p-2 border border-green-300 rounded-md"
                />
              </div>
              <button
                onClick={handleUpdateForum}
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Update Question
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
