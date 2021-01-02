import { Link, Redirect } from 'react-router-dom';
import './Navbar.css';
const $ = require('jquery');

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
    } else {
        $("nav").removeClass("black");
    }
});

const Navbar = () => {
    const openClick = () => {
        $("#mySidenav").css({"width": "200px"});
    }
    const closeClick = (e:any) => {
        e.preventDefault();
        $("#mySidenav").css({ "width": "0px"});

    }
    return (
        <nav className="navbar">
            <div className="menu-icon" onClick={openClick}>
                <i className="fa fa-bars fa-2x"></i>
            </div>
            <div id="mySidenav" className="sidenav">
                <a href="/" className="sidenav-logo">Yasir</a>
                <a href="/" className="closebtn" onClick={closeClick}>&times;</a>
                <a href="#">Project</a>
                <a href="/contact">Contact</a>
                <a href="#">About</a>
            </div>
            <div>
                <a href="/" className="logo">Yasir</a>
            </div>
            
            <div className="navbar-items">
                <a className="pc-view" href="#">Home</a>
                <a className="pc-view" href="#">Projects</a>
                <a className="pc-view" href="/contact">Contact</a>
                <a className="pc-view" href="#">About</a>
            </div>
        </nav>
      );
}
 
export default Navbar ;