import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import '../styles/ContactPage.css';

function ContactPage () {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted");

        if (!form.current) {
            console.error("Form not found");
            return;
        }

        // console.log(Form ref exists:", form.current);

        emailjs.sendForm(
            "service_v7dq2nn",
            "template_obmbtlp",
            form.current,
            "AmVvhjl0d_Xw9udte"
        ).then(
            (result) => {
                console.log("Email sent successfully:", result.text);
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            },
            (error) => {
                alert("Failed to send message, please try again.");
                console.error("EmailJS error:", error);
            }
        );
    };

    return(
        <div className="contact-container">
             <h1>Contact</h1>
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
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