import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainScreen from './components/MainFront/MainScreen'
import SideMenu from './components/MainFront/SideMenu'
import TodoDisplay from './components/MainFront/TodoDisplay'
import NavBar from './components/NavBar'
import ProfileMain from './components/Profile/ProfileMain'
import TaskScreen from './components/TaskFront/TaskScreen'

const App = () => {
  return (
    <>
    <BrowserRouter>

    <NavBar />
    <div className='flex'>

    <SideMenu />

    <Routes>


    
    <Route exact path='/' element={<MainScreen />}></Route>
    <Route exact path='/tasks' element={<TaskScreen />}></Route>
    <Route exact path='/profile' element={<ProfileMain />}></Route>

    </Routes>

    </div>


    </BrowserRouter>
    </>
  )
}

export default App