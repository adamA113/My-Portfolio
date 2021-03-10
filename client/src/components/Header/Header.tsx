import './Header.css';
import header_img from './header-img.png';
// import $ from 'jquery';

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

            <img id="img_ID" src={header_img} alt="header-background" useMap="#header-img" />

            <map id="map_ID" name="header-img">
                <area alt="" title="" href="/tech" coords="523,52,561,52,561,108,559,172,557,249,552,308,552,346,552,398,553,449,553,504,554,554,551,605,498,607,425,607,339,608,233,606,140,605,122,586,125,529,126,482,129,402,128,326,133,306,117,228,102,157,89,82,88,55,197,50,349,51" shape="poly" />

                <area alt="" title="" href="/projects" coords="959,424,866,423,769,425,662,423,574,425,573,473,575,525,575,578,574,646,577,694,625,698,701,699,806,696,881,695,929,696,970,694,971,607,965,494" shape="poly" />
                
                <area alt="" title="" href="/contact" coords="785,278,676,278,580,279,578,374,677,378,785,377" shape="poly" />

                <area alt="" title="" href="/about" coords="456,637,334,631,242,631,240,734,340,737,455,738" shape="poly" />
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