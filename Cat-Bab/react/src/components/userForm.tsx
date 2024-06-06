import { React, useState, useEffect, FC } from "react";
import { createUser, updateUser, getUserById } from "../API/apiUrl";
import { UserformProps } from "../utils/interface";

const userForm: FC<UserformProps> = ({ userId, onSuccess }) => {
  const [name, setName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    if (userId) {
      getUserById(userId).then((response: any) => {
        setName(response?.data?.name);
        setAvatar(response?.data?.avatar);
      });
    }
  }, [userId]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = { name, avatar };
    if (userId) {
      updateUser(userId, user).then(onSuccess);
    } else {
      createUser(user).then(onSuccess);
    }
  };

  return (
    <form className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700">name</label>
        <input
          type="text"
          onChange={(e: any) => setName(e.target.value)}
          value={name}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          avatar
        </label>
        <input
          type="text"
          onChange={(e: any) => setName(e.target.value)}
          value={avatar}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none"
      >
        {userId ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default userForm;
