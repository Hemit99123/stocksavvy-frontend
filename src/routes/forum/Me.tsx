import { Header } from "@/components/forum/Header"
import httpHeader from "@/services/httpHeader"
import { Forum } from "@/types/forum"
import { PencilIcon, Trash } from "lucide-react"
import { useEffect, useState } from "react"


export default function Me() {
  const [questions, setQuestions] = useState<Forum[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
      await httpHeader.delete("/forum/delete", { data: { id } });
  
      // Update state by removing the deleted forum
      setQuestions((prevQuestions) =>
        prevQuestions.filter((question) => question.id !== id)
      );
    } catch (error) {
      console.error("Error deleting forum:", error);
    }
  };
  

  return (
    <>
          <Header />
          <div className="bg-green-50 min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">My Questions</h1>

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
                  <PencilIcon />
                  <Trash onClick={() => handleDeleteForum(question.id)}/>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>

  )
}

