// import { Link, Redirect } from 'react-router-dom';
import './Navbar.css';
const $ = require('jquery');

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("white");
    } else {
        $("nav").removeClass("white");
    }
});

$(document).ready(function () {
    if (localStorage.getItem("theme") === "dark") {
        $(':root').addClass("dark");
        $('#dark-mode').prop("checked", true);
    }
    else{
        $(':root').removeClass("dark");
        $('#dark-mode').prop("checked", false);
    }

    $('#dark-mode').on("change", function () {
        // console.log("jiji")
        $(':root').toggleClass('dark');
        if ($(':root').hasClass("dark")) {
            localStorage.setItem("theme", 'dark');
            $('#dark-mode').prop("checked", true);
        }
        else{
            localStorage.setItem("theme", 'light');
            $('#dark-mode').prop("checked", false);
        }
    });
});

const Navbar = () => {
    const openClick = () => {
        $("#mySidenav").css({ "width": "200px" });
    }
    const closeClick = (e: any) => {
        e.preventDefault();
        $("#mySidenav").css({ "width": "0px" });

    }
    return (
        <nav className="navbar">
            <div className="menu-icon" onClick={openClick}>
                <i className="fa fa-bars fa-2x"></i>
            </div>
            <div id="mySidenav" className="sidenav">
                <a href="/" className="sidenav-logo">Yasir</a>
                <a href="/" className="closebtn" onClick={closeClick}>&times;</a>
                <a href="/tech">Tech.</a>
                <a href="/projects">Project</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
            </div>
            <div className="logo-container">
                <a href="/" className="logo">Yasir</a>
            </div>

            <div className="navbar-items">
                <a className="pc-view" href="/tech">Tech.</a>
                <a className="pc-view" href="/projects">Projects</a>
                <a className="pc-view" href="/contact">Contact</a>
                <a className="pc-view" href="/about">About</a>

                <div className="toggle-container">
                    <label htmlFor="dark-mode" style={{"display":"none"}}>dark mode switch</label>
                    <input type="checkbox" id="dark-mode" />
                    <div className="slider round"></div>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;