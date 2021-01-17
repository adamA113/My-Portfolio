
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <a className="header-email" href="mailto:yasir.tobbileh@gmail.com">
                <p>yasir.tobbileh@gmail.com</p>
            </a>
            <p className="header-disc">My name is Yasir</p>
            <h2 className="header-disc">Full Stack Software Engineer</h2>
            {/* <button id="btn-projects">Projects</button> */}

        </div>
    );
}

export default Header;