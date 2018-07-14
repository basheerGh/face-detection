import React from 'react';
import './navigation.css'

const Navigation = ({ onRouteChange, isSignIn }) => {

        if (isSignIn) {
            return(
            <nav>
            <p onClick={() => onRouteChange('signout')} className='f3 link grow black underline pa3 pointer'>Sign out</p>
            </nav> 
            )
        }else {
            return(
            <nav>
            <p onClick={() => onRouteChange('signin')} className='f3 link grow black underline pa3 pointer'>Sign in</p>
            
            
            <p onClick={() => onRouteChange('register')} className='f3 link grow black underline pa3 pointer'>Register</p>
            </nav>
            );
        }
       

}

export default Navigation;