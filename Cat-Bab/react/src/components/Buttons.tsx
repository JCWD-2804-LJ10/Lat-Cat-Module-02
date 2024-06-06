import { FC } from "react";

interface ButtonProps {
    title: string
    onclick: () => void
    style: string;
}

const buttons: FC<ButtonProps> = ({title,style,onclick}) => {
  return (
    <button onClick={onclick} className={style}> 
    {title}
    </button>
  )
}

export default buttons