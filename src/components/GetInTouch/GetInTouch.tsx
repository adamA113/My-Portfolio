import './GetInTouch.css';
const GetInTouch = () => {

    // const handleSubmit = () => {

    // }
    return (
        <div id="contact">
            {/* <form id="query-form" onSubmit={handleSubmit}>
                <h3>Get In Touch</h3>
                <br />
                <div className="column">
                    <label htmlFor="username" >Name:</label>
                    <input type="text" className="text" id="username" name="username" />
                    <div className="username error" ></div>

                    <label htmlFor="email" >Email:</label>
                    <input type="email" className="text" id="email" name="email"/>
                    <div className="email error" ></div>

                    <label htmlFor="subject" >Subject:</label>
                    <input type="text" className="text" id="subject" name="subject" /><br/>

                    <label htmlFor="message" >Message:</label>
                    <textarea className="text" id="message" name="message"></textarea>
                </div>
                <br />
                <button className="query-btn">Send Enquiry</button><br />
            </form> */}
            <div className="contact-container">
                <div className="contact-details">
                    <h3>Get In Touch</h3>
                    
                    <div className="data-container">
                        <a className="my-data" href="mailto:yasir.tobbileh@gmail.com">
                            <i className="fas fa-envelope-square fa-2x"></i>
                            <span> yasir.tobbileh@gmail.com</span>
                        </a>
                    </div>

                    <div className="data-container">
                        <a className="my-data" href="https://www.linkedin.com/in/yasir-tobbileh/" target="_blank" rel="noreferrer" >
                            <i className="fab fa-linkedin fa-2x"> </i>
                            <span> Yasir-Tobbileh</span>
                        </a>
                    </div>

                    <div className="data-container">
                        <a className="my-data" href="https://twitter.com/Yasir_Tobbileh" target="_blank" rel="noreferrer" >
                            <i className="fab fa-twitter-square fa-2x"> </i>
                            <span> @Yasir_Tobbileh</span>
                        </a>
                    </div>
                </div>

                <div className="contact-img">
                    <img src="https://images.unsplash.com/photo-1532262318931-eb6ff23aabc6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=662&q=80" alt="laptop" />
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;