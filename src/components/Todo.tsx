import IconBin from "../icons/Bin";

interface TodoProps {
  id: string;
  title: string;
  completed: boolean;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function Todo({
  id,
  title,
  completed,
  onDelete,
  onToggle,
}: TodoProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center w-full">
          <input
            type="checkbox"
            className="h-5 w-5 border-gray-300 rounded mr-4"
            onChange={() => onToggle(id)}
            checked={completed}
          />
          <div className={completed ? "line-through text-gray-500" : ""}>
            {title}
          </div>
        </div>
        <button onClick={() => onDelete(id)}>
          <IconBin />
        </button>
      </div>
    </div>
  );
}
