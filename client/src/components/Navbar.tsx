import React from 'react';
 
const Navbar = () => {
    return (
        <div class="header">
            <a href="#default" class="logo">Yasir</a>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
      );
}
 
export default Navbar ;