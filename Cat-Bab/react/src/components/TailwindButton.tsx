import { FC } from "react";

interface TailwindButtonProps {
  id: string;
  title?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

const TailwindButton: FC<TailwindButtonProps> = ({ id, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white"
      id={id}
    >
      {title}
    </button>
  );
};

export default TailwindButton;
