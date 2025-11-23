import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer style={{
            background: 'Brown',
            padding: '80px 10% ',
            display: "flex",
            textAlign: 'center'
        }}>

            <div style={{ width: "100%" }}>
                <h2 style={{ margin: 0,  textAlign: 'center' , alignItems: 'center' }}>Coding School</h2>
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dolorem officia consectetur.</h3>
            </div>

            <div style={{ width: "100%" }}>
                <h2 style={{ margin: 0,  }}>Links</h2>
                <ul style={{ listStyle: "none" }}>
                    <li>
                        <Link to="/" style={{ color: "white", textDecoration: "none" ,textAlign: "center"  }}> Home </Link>
                    </li>

                    <li>
                        <Link to="/teacher" style={{ color: "white", textDecoration: "none" }}> Teacher </Link>
                    </li>



                    <li>
                        <Link to="/holiday" style={{ color: "white", textDecoration: "none" }}> Holiday </Link>
                    </li>

                    <li>
                        <Link to="/contact-us" style={{ color: "white", textDecoration: "none" }}> contact-us </Link>
                    </li>
                </ul>
            </div>

            <div style={{ width: "100%" }}>
                <h2 style={{ margin: 0 }}>Social media Links</h2>
                <ul style={{ listStyle: "none" }}>
                    <li>
                        <Link to="/" style={{ color: "white", textDecoration: "none" }}><i className="ri-facebook-box-fill"></i> FaceBook </Link>
                    </li>

                    <li>
                        <Link to="/teacher" style={{ color: "white", textDecoration: "none" }}>
                            <i className="ri-youtube-fill"></i> YouTube </Link>
                    </li>



                    <li>
                        <Link to="/holiday" style={{ color: "white", textDecoration: "none" }}><i className="ri-instagram-line"></i> InstaGram </Link>
                    </li>

                    <li>
                        <Link to="/contact-us" style={{ color: "white", textDecoration: "none" }}> <i className="ri-linkedin-box-fill"></i> LinkedIn </Link>
                    </li>
                </ul>
            </div>

            

            <div style={{ width: "100%" }}>
                <h2 style={{ margin: 0 }}> Contact Us </h2>
                <form style={{display:"flex", flexDirection:"column", gap: 5}}>
                    <input type="text" placeholder='Fully Name' style={{
                        border: 'none', padding: 5, borderRadius: 4 , 
                    }} />

                    <input type="text" name='email' placeholder='Email@yahoo.com' style={{
                        border: 'none', padding: 5, borderRadius: 4
                    }} />

                    <textarea type="text" placeholder='Fully Name' style={{
                        border: 'none', padding: 5, borderRadius: 4
                    }} rows="3" />
                    <button style={{padding: 5 }}>Submit</button>
                </form>


            </div>
        </footer>

    )
}
export default Footer