import React from 'react'
import logo from '../Assets/todo.png';



 const Header = () => {
    return (

    <header className='header'>
         <nav className='nav'>
             <div className='image'>
             <img src={logo} alt='todolistimage'/>  
             </div>  
            </nav>
    </header>

 )
}
export default Header;
