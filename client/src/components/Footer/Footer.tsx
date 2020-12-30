
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
                <a className="active" href="#">Home</a>
                <a href="#" className="fot-item">Yasir</a>
                <a href="#" className="fot-item">Contact</a>
                <a href="#" className="fot-item">Projects</a>
                <a href="#" className="fot-item">About</a>
            </div>
        </div>
    );
}

export default Footer;