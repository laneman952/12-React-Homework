import { useState } from "react"

function ContactPage () {
    const [formData, setData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message!");
    };

    return(
        <div className="contact-container">
             <h1>Contact</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}
export default ContactPage