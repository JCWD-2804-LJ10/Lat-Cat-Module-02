import {BrowserRouter,Route,Routes} from 'react-router-dom'
import "./App.css"

import LandingPage from './pages/landingpage'
import AuthPage from './pages/auth-page'
import StatePage from './pages/state-page'
import LoginPage from './pages/login-page'
import TodoPage from './pages/todoPage'

import { ChakraProvider } from '@chakra-ui/react'
const App = () => {
  return (
    <div>
      <ChakraProvider>
      <BrowserRouter> 
        <Routes>
          <Route element={<StatePage />} path='/auth-page/state-page'></Route>
          <Route element={<LandingPage />} path='/auth-page/landingpage/:id'></Route>
          <Route element={<AuthPage />} path='/auth-page'></Route>
          <Route element={<LoginPage />} path='/login-page'></Route>
          <Route element={<TodoPage />} path='/todo'></Route>
        </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  )
}

export default App