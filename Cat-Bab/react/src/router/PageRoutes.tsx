
import { Provider } from "react-redux";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {ThemeProvider} from '../context/ThemeContext'
import LandingPage from '../pages/landingpage'
import AuthPage from '../pages/auth-page'
import StatePage from '../pages/state-page'
import LoginPage from '../pages/login-page'
import TodoPage from '../pages/todoPage'
import HookPage from '../pages/hookpage'
import ThemePage from '../pages/themepage'
import SettingsPage from '../pages/settingspage'
import AuthPages from '../pages/AuthPages'
import {store} from '../store/store'
import Counting from '../pages/counting'
import UsersPage from '../pages/userspage'
import Registration from "../pages/register";
const PageRoutes = () => {
  return (
    <Provider store={store}>
    <ThemeProvider>
    <BrowserRouter>
    <Routes>
    <Route element={<StatePage />} path='/auth-page/state-page'></Route>
    <Route element={<LandingPage />} path='/auth-page/landingpage/:id'></Route>
    <Route element={<AuthPage />} path='/auth-page'></Route>
    <Route element={<LoginPage />} path='/login-page'></Route>
    <Route element={<TodoPage />} path='/todo'></Route>
    <Route element={<HookPage />} path='/hook'></Route>
    <Route element={<ThemePage />} path='/'></Route>
    <Route element={<SettingsPage />} path='/settings'></Route>
    <Route element={<AuthPages />} path='/auth'></Route>
    <Route element={<Counting />} path='/count'></Route>
    <Route element={<UsersPage />} path='/user'></Route>
    <Route element={<Registration />} path='/register'></Route>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </Provider>
  )
}

export default PageRoutes