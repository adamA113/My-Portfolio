import './About.css';
const About = () => {
    return (
        <div className="about">
            <div className="about-container"> 
                <div className="about-img">
                    <img src="https://mk0stemstudylnn81ule.kinstacdn.com/wp-content/uploads/2019/04/business-code-coding-943096-600x400.jpg" />
                </div>

                <div className="about-me">
                    <h3>About me</h3>
                    <p>My name is Yasir Tobbileh. I am a Full stack developer/ Software Engineer. I am interested in web development and network design.</p>

                    <p>Also, as an Electrical Engineer, I am really into creating software for IoT devices and embedded systems, as well as designing and implementing their hardware as well. </p>

                    <a className="my-resume" href="https://www.visualcv.com/pdfs/6311737/" target="_blank">My Resume</a><br />
                </div>

            </div>
        </div>

    );
}

export default About;