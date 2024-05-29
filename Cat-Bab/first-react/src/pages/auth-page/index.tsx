import { useNavigate } from "react-router-dom"


const AuthPage = () => {

    const navigate = useNavigate();
    const text = "Welcome"
    const id = 27
  return (
    <main>

    <button onClick={() => navigate("/auth-page/landingpage/" + id,
        {
            state:{
                text: text
            }
        }
      )}>

        navigate landing page
    </button>

    </main>
  )
}

export default AuthPage