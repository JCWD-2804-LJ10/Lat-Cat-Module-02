import { FC } from "react"

    interface ComponentProps{
        children: React.ReactNode
    }

const ReuseComp: FC<ComponentProps> = ({children}) => {
  return (
    <main> 
        
        <div>{children}</div>
    </main>
    
  )
}

export default ReuseComp