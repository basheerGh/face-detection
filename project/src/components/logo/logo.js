import React from 'react';
import './logo.css'
import Tilt from 'react-tilt'
import face from './image/face.png'

const Logo = () => {
    return(
     <div className='ml5'>
         <Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 100, width: 100 }} >
             <div className="Tilt-inner"> <img style={{width:'80%', padding: 10}} src={face} alt=""/></div>
         </Tilt>
     </div>
    )
}

export default Logo;