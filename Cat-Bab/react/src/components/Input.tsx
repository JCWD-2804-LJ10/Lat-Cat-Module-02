import { FC } from "react";

interface InputProps {
  id: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: FC<InputProps> = ({
  id,
  type,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none text-white"
      />
    </div>
  );
};

export default Input;
