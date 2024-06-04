import React from 'react'
import {useTheme} from "../../context/ThemeContext"
import {useCounter} from "../../hooks/useCounter"
import useToggle from "../../hooks/useToggle"

const ThemePage = () => {

    const { theme } = useTheme();
    const { count,increment,decrement} = useCounter()
    const [ isToggled , toggle ] = useToggle()
    const themeContainer = {
      black: "bg-black text-white w-screen h-screen flex justify-center items-center",
      white: "bg-white text-black w-screen h-screen flex justify-center items-center",
    }

  return (
    <main className={theme === "light" ? themeContainer.black : themeContainer.white}>
        <div className= {theme === "light" ? "text-white font-bold" : "text-blach font-bold"}>
          <h4>Home Page</h4>
          <p>Mode : {theme === "light" ? "Night Mode" : "Light Mode"}</p>
        </div>

        <div className="grid grid-cols-3 gap-y-5">
            <div className="my-3">
                <button
                onClick={toggle}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white focus:outline-none"
                >
                toggle
                </button>
            </div>
            <div className="my-3">
                <h4>{isToggled ? "on" : "off"}</h4>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-y-5">
            <div className="my-3">
                <button 
                onClick={increment}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white focus:outline-none"
                >
                Increment
                </button>
            </div>
        </div>
        <div className="mx-5">
            <h4>counter : {count}</h4>
        </div>
        <div className="my-3">
                <button 
                onClick={decrement}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white focus:outline-none"
                >
                Decrement
                </button>
            </div>
    </main>
  )
}

export default ThemePage