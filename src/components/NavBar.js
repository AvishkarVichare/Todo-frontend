import React from 'react'

const NavBar = () => {
  return (
    <>
    <nav className='flex justify-between h-[5vh] px-10 text-[#bcbcbf] bg-[#21212b]'>
        <div>
            Menu
        </div>
        <div>
            <h1 className='text-[2rem]'>
                TODOs
            </h1>
        </div>
        <div>
            <h4>
                Profile
            </h4>
        </div>
    </nav>
    </>
  )
}

export default NavBar