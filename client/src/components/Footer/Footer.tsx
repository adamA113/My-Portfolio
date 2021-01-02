
import './Footer.css';
const Footer = () => {
    const handleClick = () => {

    }
    return (
        <div className="footer">
            <div className="bio" onClick={handleClick}>
                <h4>Yasir Tobbileh</h4>
                <p> Full Stack Software Engineer</p>
            </div>

            <div className="footer-items">
                <div className="main-items">
                    <a href="#" className="fot-item">Yasir</a>
                    <a href="#" className="fot-item">Projects</a>
                    <a href="#" className="fot-item">Contact</a>
                    <a href="#" className="fot-item">About</a>
                </div>
                <div className="soc-icon">
                    <a href="https://www.linkedin.com/in/yasir-tobbileh/" target="_blank" className="fot-item"><i className="fab fa-linkedin fa-2x"></i></a>

                    <a href="https://www.linkedin.com/in/yasir-tobbileh/" target="_blank" className="fot-item"><i className="fab fa-facebook-square fa-2x"></i></a>
                </div>

            </div>

            <div className="copyright">
                <i className="far fa-copyright"> 2020 Designed by Yasir Tobbileh</i>
            </div>
        </div>
    );
}

export default Footer;