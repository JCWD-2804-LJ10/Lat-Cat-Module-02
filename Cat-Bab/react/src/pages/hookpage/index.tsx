import React from 'react'
import HookRefExp from "../../components/HookExam"
import UseMemoExample from "../../components/UseMemoExample"

const HookPage = () => {
  return (
    <div className="w-screen h-full flex justify-center items-center">
        <HookRefExp/>
        <UseMemoExample/>
    </div> 
  )
}

export default HookPage