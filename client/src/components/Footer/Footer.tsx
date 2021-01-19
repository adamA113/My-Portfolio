
import './Footer.css';
const Footer = () => {
    const handleClick = () => {

    }
    return (
        <footer className="footer">
            <div className="bio" onClick={handleClick}>
                <h4>Yasir Tobbileh</h4>
                <p> Full Stack Software Engineer</p>
            </div>

            <div className="footer-items">
                <div className="main-items">
                    <a href="/tech" className="fot-item">Tech.</a>
                    <a href="/projects" className="fot-item">Projects</a>
                    <a href="/contact" className="fot-item">Contact</a>
                    <a href="/about" className="fot-item">About</a>
                </div>
                <div className="soc-icon">
                    <a href="https://www.linkedin.com/in/yasir-tobbileh/" target="_blank" className="fot-item"><i className="fab fa-linkedin fa-2x"></i></a>

                    <a href="https://github.com/adamA113" target="_blank" className="fot-item"><i className="fab fa-github fa-2x"></i></a>
                </div>

            </div>

            <div className="copyright">
                <i className="far fa-copyright"> 2021 Designed by Yasir Tobbileh</i>
            </div>
        </footer>
    );
}

export default Footer;