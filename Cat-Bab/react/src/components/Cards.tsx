import { FC } from "react"

interface CardProps
{
    title: string;
    description: string;
    link: string;
    onclick: () => void;
  
}

const Cards: FC<CardProps>= ({title,description,link,onclick}) => {
  return (
    <main className="card" onClick={onclick}>
<img src={link} className="card-image" />
    <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
    </div>

    </main>
    
  )
}

export default Cards