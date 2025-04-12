import httpHeader from "@/services/httpHeader";
import { useEffect, useState } from "react";
import {
  FiPlus,
  FiMoreHorizontal,
  FiArrowUpRight,
  FiFileText,
} from "react-icons/fi";

type Question = {
  id: string;
  title: string;
  date: string;
  difficulty: string;
};

const CreateQuestion = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ title: "", difficulty: "" });

  useEffect(() => {

    const handleGetAllQuestions = async () => {
      const response = await httpHeader.get("/questions/get-all")
      setQuestions(response.data.questions)
    }
    
    handleGetAllQuestions();
  }, []);

  const handleCreate = async () => {
    try {
      console.log("going to add logic")
    } catch (err) {
      console.error("Error creating question:", err);
    }
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
          {questions.map((q, idx) => (
            <TableRow
              key={q.id}
              id={q.id}
              title={q.title}
              date={q.date}
              difficulty={q.difficulty}
              order={idx + 1}
            />
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h4 className="text-lg font-semibold mb-4">Create a New Question</h4>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Question Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full border p-2 rounded text-sm"
              />
              <select
                value={form.difficulty}
                onChange={(e) =>
                  setForm({ ...form, difficulty: e.target.value })
                }
                className="w-full border p-2 rounded text-sm"
              >
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Hard">Hard</option>
              </select>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded bg-stone-200 hover:bg-stone-300 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreate}
                  className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 text-sm"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TableHead = () => (
  <thead>
    <tr className="text-sm font-normal text-stone-500">
      <th className="text-start p-1.5">ID</th>
      <th className="text-start p-1.5">Title</th>
      <th className="text-start p-1.5">Date</th>
      <th className="text-start p-1.5">Difficulty</th>
      <th className="w-8"></th>
    </tr>
  </thead>
);

const TableRow = ({
  id,
  title,
  date,
  difficulty,
  order,
}: {
  id: string;
  title: string;
  date: string;
  difficulty: string;
  order: number;
}) => (
  <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
    <td className="p-1.5">
      <a href="#" className="text-green-600 underline flex items-center gap-1">
        {id} <FiArrowUpRight />
      </a>
    </td>
    <td className="p-1.5">{title}</td>
    <td className="p-1.5">{date}</td>
    <td className="p-1.5">{difficulty}</td>
    <td className="w-8">
      <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
        <FiMoreHorizontal />
      </button>
    </td>
  </tr>
);

export default CreateQuestion;