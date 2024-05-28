
import { FC } from "react"

interface reusableprop{
  description: string
}


const Reusetext: FC<reusableprop> = ({description}) => {

  

  return (
    <main>
    <div>Reusetext</div>
    <div>{description}</div>
    </main>
  
  )
}

export default Reusetext
