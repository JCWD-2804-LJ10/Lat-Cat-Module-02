import "./App.css"
import Reusetext from "./components/Reusetext.tsx"
import ReuseComp from "./components/ReuseComp.tsx"
import Cards from "./components/Cards.tsx"

const App = () => {

  const clicked = () =>{
    alert("Clicked")
  }

  return (
    <main className="container"> 
      <div className="app-element">Appa</div>
      <div className="app-element">Appa</div>
      <div className="app-element">App</div>
      <Reusetext description="yoyoyoyo" />
      <Reusetext description="yoyoyoyo" />
      <ReuseComp>
        <button className="test">this is child</button>
      </ReuseComp>
      <div className="card-layout">
      <Cards 
      description="Sunset" 
      title="nice sunset" 
      link="https://upload.wikimedia.org/wikipedia/commons/a/a4/Anatomy_of_a_Sunset-2.jpg" 
      onclick={clicked} />
      <Cards 
      description="Sunset" 
      title="nice sunset" 
      link="https://upload.wikimedia.org/wikipedia/commons/a/a4/Anatomy_of_a_Sunset-2.jpg" 
      onclick={clicked} />
      <Cards 
      description="Sunset" 
      title="nice sunset" 
      link="https://upload.wikimedia.org/wikipedia/commons/a/a4/Anatomy_of_a_Sunset-2.jpg" 
      onclick={clicked} />
      </div>
    </main>
  )
}

export default App
