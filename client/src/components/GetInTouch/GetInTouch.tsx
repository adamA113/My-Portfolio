
import './GetInTouch.css';
const GetInTouch = () => {

    // const handleSubmit = () => {

    // }
    return (
        <div id="query">
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
                    <div className="email-container">
                        <p> Email:
                            <a className="my-email" href="mailto:yasir.tobbileh@gmail.com">
                                <p>yasir.tobbileh@gmail.com</p>
                            </a>
                        </p>

                    </div>

                    <div className="phone-container">
                        <span>Cell Phone:</span>
                        <p className="my-phone"> (+972) 59 247 4285</p>
                    </div>
                </div>

                <div className="contact-img">
                    <img src="https://images.unsplash.com/photo-1532262318931-eb6ff23aabc6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=662&q=80" />
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;