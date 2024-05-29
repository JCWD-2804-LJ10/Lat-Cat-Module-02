import { useEffect, useState } from "react";
import Input from "../../components/Input";
import TailwindButton from "../../components/TailwindButton";
import * as React from "react";
import { data } from "../../dummy/credentials";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate =useNavigate()
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setCredentials({
     ...credentials,
      [name]: value,
    });
  }
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if (credentials.email !== data.email && credentials.password !== data.password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        confirmButtonText: 'OK',
      })
    } else {
      Swal.fire({
        icon:'success',
        title: 'Success!',
        text: 'You have successfully logged in!',
        confirmButtonText: 'OK',
      }).then((response) => {
        if (response.isConfirmed) {
          navigate("/auth-page")
        }
      });
    }
  }
  
  return (
    <main className="w-screen h-full flex justify-center items-center">
      <div className="w-60 grid grid-cols-1">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input
            id="email"
            type="email"
            name="email"
            value={credentials.email}
            placeholder="type your email here..."
            onChange={HandleChange}
          />
          <Input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            placeholder="type your password here..."
            onChange={HandleChange}
          />
          <TailwindButton 
          id="login-button"
          title="login"
          type="submit"
          />
        </form>
      </div>
    </main>
  );
}
export default LoginPage;
