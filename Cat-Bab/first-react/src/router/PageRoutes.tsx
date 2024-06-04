import React from 'react'
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
import Auth from '../pages/auth'
const PageRoutes = () => {
  return (
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
    <Route element={<Auth />} path='/auth'></Route>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default PageRoutes