import React from 'react'
import "./MaintContainer.css"
import banner from "../../../assets/banner.jpg"
import CardMain from '../CardMain/CardMain'

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
                <div className="cards">
                    <div className="filters">
                        <div className="popular">
                            <h2>Feed</h2>
                            <a href="#!" className='button2'>Popular</a>
                        </div>
                        <div className="filter_buttons">
                            <a href="#!" className='button1'>Recent</a>
                            <a href="#!" className='button2'>Trends</a>
                            <a href="#!" className='button2'>Lowest</a>
                        </div>
                    </div>
                    <main>
                        <CardMain />
                    </main>
                </div>
            </div>

            <div className="right">

            </div>
        </div>
    )
}

export default MaintContainer