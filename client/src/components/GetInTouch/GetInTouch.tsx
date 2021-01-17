
import './GetInTouch.css';
const GetInTouch = () => {

    const handleSubmit = () =>{

    }
    return ( 
        <div id="query">
            <form id="query-form" onSubmit={handleSubmit}>
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
            </form>
        </div>
     );
}
 
export default GetInTouch;