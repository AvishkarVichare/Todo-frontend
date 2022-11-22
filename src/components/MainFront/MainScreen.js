import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoModal from '../modals/TodoModal'
import SideMenu from './SideMenu'
import TodoDisplay from './TodoDisplay'
import TaskScreen from '../TaskFront/TaskScreen'

const MainScreen = () => {

  const [showModal, setShowModal] = useState(false);
  return (
    <div className='relative'>
        

    <TodoDisplay setShowModal={setShowModal} />
      

    
    {
      showModal && <TodoModal setShowModal={setShowModal} />
    }
    </div>
  )
}

export default MainScreen