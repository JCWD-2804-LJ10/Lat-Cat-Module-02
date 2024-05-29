import { useState } from "react"
import Buttons from "../../components/Buttons"
import Swal from "sweetalert2"

const StatePage = () => {

    const [count,setcount] = useState<number>(0)
    const [color, setColor] = useState<boolean>(false)
    const increment = () => {
        setcount(count + 1)
    }
    const decrement = () => {
        setcount(count - 1)
        if (count <= 0){
           Swal.fire("cant decrement")
            setcount(0)
        }
    }
    const changeColor = () => {
        setColor(!color)
    }

  return (
    <main className="container">
        <div className="button-group">
            <Buttons title="+" 
            style={color === true ? "button-reusable-green" : "button-reusable-red"}
            onclick={increment}/>
            <div>
            <h3> number count: {count} </h3>
            <button title="Change Color" 
            className="button-reusable"
            onClick={changeColor}></button>
            </div>
            <Buttons title="-" 
            style={color === true ? "button-reusable-green" : "button-reusable-red"} 
            onclick={decrement} />
        </div>
    </main>
  )
}

export default StatePage