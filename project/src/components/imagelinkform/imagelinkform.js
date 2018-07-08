import React from 'react';
import './imagelinkform.css'



const ImageLinkForm = ({ onInputChange, onButtonClick }) => {
    return(
     <div>
       <p className='f3 center'>
           {'This Magic face detection to Your pictures'}
       </p>
       <div className='center'>
       <div className='form center pa3 br3 shadow-1'>
       <input className='f4 pa2 w-70 center' type="text"  onChange={onInputChange}/>
       <button className=' w-30 link ph3 pv2 dib white bg-light-purple grow'
               onClick={onButtonClick}
       >Detect</button>
     </div>
     </div>
     </div>
    )
}

export default ImageLinkForm;