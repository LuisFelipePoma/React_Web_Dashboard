import React from 'react'
import "./MaintContainer.css"
import banner from "../../../assets/banner.jpg"

function MaintContainer() {
    return (
        <div className='mainContainer'>
            <div className="left">
                <div className="banner"
                    style={{
                        background: `url(${banner})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                    <div className="textContainer">
                        <h1>New Dashboard</h1>
                        <h2>React Web</h2>
                        <p>Don Gato</p>
                    </div>
                </div>
            </div>
            <div className="right">

            </div>
        </div>
    )
}

export default MaintContainer