import './Header.css';
import header_img from './header-img.png';
import $ from 'jquery';

// jQuery(function (e) {
//     $('img[usemap]').rwdImageMaps();

//     });
const Header = () => {
    return (
        <header className="header">
            {/* <a className="header-email" href="mailto:yasir.tobbileh@gmail.com">
                <p>yasir.tobbileh@gmail.com</p>
            </a> */}
            {/* <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" /> */}

            <img src={header_img} alt="header-background" useMap="#header-img" />

            <map name="header-img">
                {/* <area shape="rect" coords="128,75, 132,130, 150,218 825,900" alt="Computer" href="/" /> */}
                <area target="" alt="" title="" href="" coords="565,52,494,52,405,48,301,47,222,49,126,48,87,52,94,113,106,176,121,242,133,307,127,349,126,437,125,520,124,568,130,601,214,602,321,602,411,604,474,606,554,606,558,175,562,97" shape="poly" />
                {/* <area shape="rect" coords="850,630,1436,1032" alt="Phone" href="/projects" />  */}
                {/* <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm" /> */}
            </map>

            <div className="my-container">
                <h1 className="header-disc">Hi, I'm Yasir Tobbileh</h1>
                <p className="header-disc">Full Stack Software Engineer</p>
                {/* <button id="btn-projects">Projects</button> */}
            </div>


        </header>
    );
}

export default Header;