import { Square } from "lucide-react";

const SendQuestion = () => {
  return (
    <div className="flex items-center bg-color__2 p-2 rounded-full gap-3">
      <input
        className="grow border-none outline-none pl-4 placeholder:text-sm"
        placeholder="Enter your question..."
      />
      <button className="bg-color__1 rounded-full flex items-center justify-center text-color__4 size-10 cursor-pointer">
        <Square size={20} />
      </button>
    </div>
  );
};

export default SendQuestion;
