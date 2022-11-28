import React, { useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoModal from '../modals/TodoModal'
import SideMenu from './SideMenu'
import TodoDisplay from './TodoDisplay'
import TaskScreen from '../TaskFront/TaskScreen'
import EditTodoModal from '../modals/EditTodoModal'

const MainScreen = () => {

  const [showTodoModal, setShowTodoModal] = useState(false);
  const [showEditTodoModal, setShowEditTodoModal] = useState(false);
  const todoToEdit = useRef({});


  

  return (
    <div className='relative'>
        

    <TodoDisplay todoToEdit={todoToEdit} setShowEditTodoModal={setShowEditTodoModal} setShowTodoModal={setShowTodoModal} />
      

    
    {
      showTodoModal && <TodoModal  setShowTodoModal={setShowTodoModal}  />
    }
    {
      showEditTodoModal && <EditTodoModal todoToEdit={todoToEdit} setShowEditTodoModal={setShowEditTodoModal}  />
    }
 
    </div>
  )
}

export default MainScreen