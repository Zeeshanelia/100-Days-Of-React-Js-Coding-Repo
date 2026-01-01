import Nav from "./Nav"
import Footer from "./Footer"

const Holiday = () => {
    const holidays = [
        {
            title: "holidays",
            duration: "15th days",
            date: "10.10.2025",
            experience: '2.5 year'
        },
        {
            title: "holidays",
            duration: "15th days",
            date: "10.10.2025",
            experience: '2.5 year'
        },
        {
            title: "holidays",
            duration: "15th days",
            date: "10.10.2025",
            experience: '2.5 year'
        },
        {
            title: "holidays",
            duration: "15th days",
            date: "10.10.2025",
            experience: '2.5 year'
        }
    ]

    return (
        <>
            <Nav />
            <div style={{
                backgroundColor: " ", margin: "0 auto", padding: "20px", width: "60%"
            }}>

                <h1 style={{ textAlign: "center" }} > Holiday'S </h1>
                <table width="100%">
                    <thead>
                        <tr style={{ backgroundColor: "#dddd" }}>
                            <th style={{ padding: "19px" }}>Serial No</th>
                            <th>Title</th>
                            <th>duration</th>
                            <th>Joining date</th>
                            <th>Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        {holidays.map((item, index) => (
                            <tr style={{ textAlign: "center", borderBottom: "2px solid #ccc" }} >
                                <td style={{borderBottom: ".7px solid #ccc" }}>{index + 1}</td>
                                <td style={{borderBottom: ".7px solid #ccc" }}>{item.title}</td>
                                <td style={{borderBottom: ".7px solid #ccc" }}>{item.duration}</td>
                                <td style={{borderBottom: ".7px solid #ccc" }}>{item.experience}</td>
                                <td style={{borderBottom: ".7px solid #ccc" }}>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div >
            <Footer />

        </>
    )
}
export default Holiday