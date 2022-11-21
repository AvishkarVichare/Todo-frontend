import React, { useState } from 'react'
import TodoModal from '../modals/TodoModal'
import SideMenu from './SideMenu'
import TodoDisplay from './TodoDisplay'

const MainScreen = () => {

  const [showModal, setShowModal] = useState(false);
  return (
    <div className='relative'>
    <div className='flex '>
        
        <SideMenu />

        <TodoDisplay setShowModal={setShowModal} />
      

    </div>
    
    {
      showModal && <TodoModal setShowModal={setShowModal} />
    }
    </div>
  )
}

export default MainScreen