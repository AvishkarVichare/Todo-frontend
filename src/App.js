import React, {useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainScreen from './components/MainFront/MainScreen'
import SideMenu from './components/MainFront/SideMenu'

import NavBar from './components/NavBar'
import ProfileMain from './components/Profile/ProfileMain'
import TaskScreen from './components/TaskFront/TaskScreen'
import TaskState from './context/Task/TaskState'

import TodoState from './context/Todo/TodoState'

const App = () => {


 
  
  return (
    <>
    
    <BrowserRouter>

    <TodoState>
    <TaskState>


    <NavBar />
    <div className='flex'>

    <SideMenu />

    <Routes>


    
    <Route exact path='/' element={<MainScreen />}></Route>
    <Route exact path='/:todoId/tasks' element={<TaskScreen />}></Route>
    <Route exact path='/profile' element={<ProfileMain />}></Route>

    </Routes>

    </div>


    
    </TaskState>
    </TodoState>

    </BrowserRouter>
    </>
  )
}

export default App