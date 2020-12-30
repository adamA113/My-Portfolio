 
 import './Navbar.css';
 const Navbar = () => {
    const handleClick = () =>{

    }
     const closeClick = () => {

     }
    return (
        <nav className="navbar">
            <span className="menu-icon" onClick={handleClick}>
                <i className="fa fa-bars fa-2x"></i>
            </span>
            <span id="mySidenav" className="sidenav">
                <a href="/" className="closebtn" onClick={closeClick}>&times;</a>
                <a href="#">About</a>
                <a href="#">Project</a>
                <a href="#">Contact</a>
            </span>
            <a href="#default" className="logo">Yasir</a>
            <div className="navbar-items">
                <a className="pc-view" href="#">Home</a>
                <a className="pc-view" href="#">Contact</a>
                <a className="pc-view" href="#">About</a>
            </div>
        </nav>
      );
}
 
export default Navbar ;