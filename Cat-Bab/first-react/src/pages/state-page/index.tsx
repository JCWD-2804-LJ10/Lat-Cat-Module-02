import { useState } from "react"
import Buttons from "../../components/Buttons"
import Swal from "sweetalert2"

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'




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
        <div>
        <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className="bg-white text-black" as='span' flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
        </div>
    </main>
  )
}

export default StatePage