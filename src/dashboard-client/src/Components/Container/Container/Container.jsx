import React from 'react'
import "./Container.css"

import NavBar from '../Navbar/NavBar'
import MaintContainer from '../MainContainer/MaintContainer'

function Container() {
    return (
        <div className='container'>
            <NavBar />
            <MaintContainer />
        </div>
    )
}

export default Container