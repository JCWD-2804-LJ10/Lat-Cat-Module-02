import {BrowserRouter,Route,Routes} from 'react-router-dom'
import "./App.css"

import LandingPage from './pages/landingpage'
import AuthPage from './pages/auth-page'
import StatePage from './pages/state-page'
import LoginPage from './pages/login-page'
import TodoPage from './pages/todoPage'
import HookPage from './pages/hookpage'
import { ChakraProvider } from '@chakra-ui/react'
const App = () => {
  return (
    <div>
      <ChakraProvider>
      <BrowserRouter> 
        <Routes>
          
        </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  )
}

export default App