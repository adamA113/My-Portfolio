import './Projects.css';
const Projects = () => {
    return (
        <div className="projects">
            <h3>My Latest Projects</h3>

            <div className="project-info">
                <div className="project-img">
                    <img src="servize.png" />
                </div>

                <div className="project-container">
                    <h4>Servize</h4>
                    <div className="project-disc">
                        <p>Website that allow you to search for a certain service and find a potentail providers and give you the best to choose from.</p>
                        <p><b>Role:</b> Scrum Master, Front End Developer.</p>
                    </div>

                    <div className="project-stack">
                        <p><b>Stack:</b></p>
                        <div className="stack-item">
                            <img src="https://img.icons8.com/color/48/000000/django.png" />
                            <p>Django</p>
                        </div>

                        <div className="stack-item">
                            <img src="https://img.icons8.com/color/48/000000/react-native.png" />
                            <p>React</p>
                        </div>

                        <div className="stack-item">
                            <img src="https://img.icons8.com/color/48/000000/redux.png" />
                            <p>Redux</p>
                        </div>

                        <div className="stack-item">
                            <img src="https://img.icons8.com/color/48/000000/sass.png" />
                            <p>Sass</p>
                        </div>

                        <div className="stack-item">
                            <img src="https://img.icons8.com/color/48/000000/postgreesql.png" />
                            <p>PostgreSQL</p>
                        </div>

                        <div className="stack-item">
                            <img src="https://img.icons8.com/color/48/000000/travis-ci.png" />
                            <p>Travis CI</p>
                        </div>
                    </div>

                    <div className="project-links">
                        <a className="project-github" href="">Source Code</a>
                    </div>
                </div>
            </div>


            <div className="project-info">
                <div className="project-img">
                    <img src="hotelcom.png" />
                </div>

                <div className="project-container">
                    <h4>HotelCom</h4>
                    <div className="project-disc">
                        <p>Website that allow you to search for a certain service and find a potentail providers and give you the best to choose from.</p>
                        <p><b>Role:</b> Scrum Master, Front End Developer.</p>
                    </div>

                    <div className="project-stack">
                        <p><b>Stack:</b></p>
                        <div className="stack-item">
                            <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" />
                            <p>Node.js</p>
                        </div>

                        <div className="stack-item">
                            <img src="https://img.icons8.com/color/48/000000/react-native.png" />
                            <p>React</p>
                        </div>

                        <div className="stack-item">
                            <img src="https://img.icons8.com/color/48/000000/redux.png" />
                            <p>Redux</p>
                        </div>

                        <div className="stack-item">
                            <img src="https://img.icons8.com/color/48/000000/mongodb.png" />
                            <p>MongoDB</p>
                        </div>
                    </div>

                    <div className="project-links">
                        <a className="project-github" href="">Source Code</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;