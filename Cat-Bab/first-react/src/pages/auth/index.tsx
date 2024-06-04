import React from 'react'
import {useState,FormEvent} from 'react'
import * as Cookies from "js-cookie"
import Swal from "sweetalert2"

const Auth = () => {
    const [username , setUsername] = useState<string>("")
    const [password , setPassword] = useState<string>("")
    const handelSubmit = (e:FormEvent) =>{
        e.preventDefault();
        if (username && password) {
            Cookies.set("auth", JSON.stringify({username,password}), {

                expires:1
            })
            Swal.fire({
                title:"succes",
                text:"succes in hh",
                icon:"success",
                confirmButtonText:"OK",
            }).then((response)=>{
                if (response.isConfirmed){
                    navigate("/auth-page")
                }
            })
        }
    }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <form 
        className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4"
        >
            <div>
                <label htmlFor="username"
                className="block text-sm font-medium text-gray-700">
                        username
                </label>
                <input type="text" 
                id="username"
                name="username"
                value={username}
                onchange={(e:any)=> setUsername(e.target.value)}
                className=
                "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none"
                />
            </div>
            <div>
                <label htmlFor="username"
                className="block text-sm font-medium text-gray-700">
                        password
                </label>
                <input type="password" 
                id="password"
                name="password"
                value={password}
                onchange={(e:any)=> setPassword(e.target.value)}
                className=
                "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none"
                />
            </div>
            <div className="flex justify-end">
                <button type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    login
                </button>

            </div>
        </form>
    </div>
  )
}

export default Auth