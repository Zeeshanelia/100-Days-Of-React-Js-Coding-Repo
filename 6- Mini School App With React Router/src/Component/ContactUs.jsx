import Nav from "./Nav"
import Footer from "./Footer"
import { useState } from "react"
import Swal from "sweetalert2"

const ContactUs = () => {
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const ContactMe = (e) => {
        e.preventDefault()
        
        Swal.fire({
            title: "Good job!",
            text: "you have clicked Form Submit !",
            icon: "success"
        });
    }
    return (
        <>
            <Nav />
            <div style={{ display: "flex", padding: 70, margin: 20 }}>
                <img src="./img/Contact pic.jpg" width='50%' height="400px" />

                <div style={{ width: "50%" }}>
                    <form onSubmit={ContactMe} >

                        <div style={{ display: "flex", flexDirection: "column", gap: 7, margin: 20 }}>
                            <label> Full Name</label>
                            <input
                                value={fullname} onChange={(e) => setFullName(e.target.value)} style={{ padding: 10, border: "1.5px solid #ccc" }} required type="text" name="fullname" placeholder="Enter Name Here" />

                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 7, margin: 20 }}>
                            <label> Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: 10, border: "1.5px solid #ccc" }} required type="text" name="email" placeholder="Example@email.com" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 7, margin: 20 }}>
                            <label> Message </label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} style={{ padding: 10, border: "1.5px solid #ccc" }} required type="text" name="message" rows={4} placeholder="Type Your Message " />
                        </div>

                        <button style={{ padding: '14px 32px', borderRadius: 4, fontWeight: 500, color: 'white', backgroundColor: "#2C5992", margin: 20 }}> Submit </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs;