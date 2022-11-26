import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoModal from '../modals/TodoModal'
import SideMenu from './SideMenu'
import TodoDisplay from './TodoDisplay'
import TaskScreen from '../TaskFront/TaskScreen'

const MainScreen = () => {

  const [showTodoModal, setShowTodoModal] = useState(false);
  return (
    <div className='relative'>
        

    <TodoDisplay setShowTodoModal={setShowTodoModal} />
      

    
    {
      showTodoModal && <TodoModal setShowTodoModal={setShowTodoModal} />
    }
   
    </div>
  )
}

export default MainScreen