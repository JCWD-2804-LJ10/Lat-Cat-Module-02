
"use client";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter()
    const handleDetailClick= () =>{
        const url = '/details/345'
        router.push(url)
    }

  return (
    <div className='w-scren h-full flex justify-center items-center'>
        <button
        onClick={ handleDetailClick}
        className='w-40 h-20 bg-cyan-500 hover:bg-cyan-600 rounded-md items-center'>
            Details page
        </button>
    </div>
  )
}

export default Login