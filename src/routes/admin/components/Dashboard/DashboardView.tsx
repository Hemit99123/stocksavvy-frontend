import httpHeader from "@/services/httpHeader";
import { useEffect, useState } from "react";
import {
  FiPlus,
  FiFileText,
} from "react-icons/fi";
import { Question } from "@/types/question";
import CreateQuestionModal from "./CreateQuestionModal";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

const DashboardView = () => {

  const [questions, setQuestions] = useState<Question[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<Question>({ question: "", options: [], type: "None", correctAnswer: "" });
  const [visibleCount, setVisibleCount] = useState(5); // Show first 5 questions

  useEffect(() => {
    const handleGetAllQuestions = async () => {
      const response = await httpHeader.get("/question/get-multiple");
      setQuestions(response.data.questions);
    };

    handleGetAllQuestions();
  }, []);



  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5); // Show 5 more on each click
  };

  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiFileText /> Questions
        </h3>
        <button
          onClick={() => setModalOpen(true)}
          className="text-sm text-green-500 hover:underline"
        >
          <FiPlus className="inline-block mr-1" />
          Create
        </button>
      </div>

      <table className="w-full table-auto">
        <TableHead />
        <tbody>
          {questions.slice(0, visibleCount).map((q, idx) => (
            <TableRow key={q.id} id={q.id as string} type={q.type} question={q.question} order={idx + 1} />
          ))}
        </tbody>
      </table>

      {visibleCount < questions.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleShowMore}
            className="text-sm text-blue-600 hover:underline"
          >
            Show More
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <CreateQuestionModal form={form} setForm={setForm} setModalOpen={setModalOpen}/>
      )}
    </div>
  );
};

export default DashboardView;