import {BrowserRouter,Route,Routes} from 'react-router-dom'
import "./App.css"

import LandingPage from './pages/landingpage'
import AuthPage from './pages/auth-page'
import StatePage from './pages/state-page'

const App = () => {
  return (
    <div>
        <BrowserRouter> 
        <Routes>
          <Route element={<StatePage />} path='/auth-page/state-page'></Route>
          <Route element={<LandingPage />} path='/auth-page/landingpage/:id'></Route>
          <Route element={<AuthPage />} path='/auth-page'></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App