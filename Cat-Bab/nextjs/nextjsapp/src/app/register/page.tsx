"use client"
import { supabase } from '@/utils/supabase';
import React, { FormEvent, useState } from 'react'
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';


const RegisterPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router =useRouter()

    const handleRegister = async (e:FormEvent) =>{
        e.preventDefault();
        try {
            const {data } = await supabase.auth.signUp({
                email:email,
                password: password
            })
            if (data){
                Swal.fire({
                    title: "Success",
                    icon: "success",
                    confirmButtonText: "OK",
                }).then ((response) =>{
                    if (response.isConfirmed){
                        router.push("/login")
                    }
                });
    
            }
        }catch (error){
            Swal.fire({
                title: "Error",
                icon: "error",
                confirmButtonText: "OK",
            })
        }
        
    }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
    <form
      onSubmit={handleRegister}
      className="w-full max-w-sm p-4 bg-white rounded-md shadow-md"
    >
      <h2 className="mb-6 text-2xl font-semibold text-center">Register</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded text-black"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded text-black"
      />
      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
      >
        Register
      </button>
    </form>
  </main>
  )
}

export default RegisterPage