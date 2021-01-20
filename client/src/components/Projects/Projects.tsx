import './Projects.css';
const Projects = () => {
    return (
        <div className="projects">
            <h3>My Latest Projects</h3>

            <div className="project-info">
                <div className="project-img">
                    <img src={require('./servize.png')}  />
                </div>

                <div className="project-container">
                    <h4>Servize</h4>
                    <div className="project-disc">
                        <p>A website that allows you to search for a certain service and find a potential provider and give you the best to choose from.</p>
                        <p><b>Role:</b> Scrum Master, Front End Developer.</p>
                    </div>

                    <p><b>Stack:</b></p>
                    <div className="project-stack">
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
                        <a className="project-github" href="https://github.com/adamA113/servize.git" target="_blank">Source Code</a>
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
                        <p>This website will help you to search for appropriate hotels in a specific city and let you filter the results based on the location or the price.</p>
                        <p><b>Role:</b> Full-Stack Developer.</p>
                    </div>

                    <p><b>Stack:</b></p>
                    <div className="project-stack">
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
                        <a className="project-github" href="https://github.com/adamA113/GreenFieldLegacy.git" target="_blank">Source Code</a>

                        <a className="project-deploy" href="https://legacy-hotels2.herokuapp.com/" target="_blank">Go to Website</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;