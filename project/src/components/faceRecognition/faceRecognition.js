import React from 'react';
import './faceRecognition.css'



const FaceRecognition = ({ imageUrl }) => {
    return(
     <div className='center'>
        <img src={imageUrl} 
             alt=""
             className='imageDisplay'
             />
     </div>
    )
}

export default FaceRecognition;