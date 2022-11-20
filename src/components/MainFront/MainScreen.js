import React from 'react'
import SideMenu from './SideMenu'
import TodoDisplay from './TodoDisplay'

const MainScreen = () => {
  return (
    <div className='flex '>
        
        <SideMenu />

        <TodoDisplay />

    </div>
  )
}

export default MainScreen