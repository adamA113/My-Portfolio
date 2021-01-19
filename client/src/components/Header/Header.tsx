
import './Header.css';
const Header = () => {
    return (
        <header className="header">
            {/* <a className="header-email" href="mailto:yasir.tobbileh@gmail.com">
                <p>yasir.tobbileh@gmail.com</p>
            </a> */}
            {/* <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" /> */}

            <div className="my-container">
                <h1 className="header-disc">Hi, I'm Yasir Tobbileh</h1>
                <p className="header-disc">Full Stack Software Engineer</p>
                {/* <button id="btn-projects">Projects</button> */}
            </div>
            

        </header>
    );
}

export default Header;