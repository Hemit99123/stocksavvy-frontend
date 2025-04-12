import { FiArrowUpRight, FiMoreHorizontal } from "react-icons/fi";

const TableRow = ({
    id,
    question,
    type, 
    order,
  }: {
    id: string;
    type: string;
    question: string;
    order: number;
  }) => (
    <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
      <td className="p-1.5">
        <a href="#" className="text-green-600 underline flex items-center gap-1">
          {id} <FiArrowUpRight />
        </a>
      </td>
      <td className="p-1.5">{question}</td>
      <td className="p-1.5">{type}</td>
      <td className="w-8">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
          <FiMoreHorizontal />
        </button>
      </td>
    </tr>
);

export default TableRow;