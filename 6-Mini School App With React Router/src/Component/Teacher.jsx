import Nav from "./Nav"
import Footer from "./Footer"


const Teachers = [
    {
        imgage: "./img/1.jpg",
        name: ' Sir Aslam Mughal ',
        qulifiqation: ' MBA(Pu),  Phd(UK)'
    },
    {
        imgage: "./img/3.jpg",
        name: ' Sir Irfan Baig ',
        qulifiqation: ' MS(Pu),  Phd(UK)'
    },
    {
        imgage: "./img/7.jpg",
        name: ' Sir Jawad ',
        qulifiqation: '   Phd(Pak)'
    },
    {
        imgage: "./img/5.jpg",
        name: ' Sir Asif Ch ',
        qulifiqation: ' MBA(Pu),  Phd(UK)'
    },
    {
        imgage: "./img/6.jpg",
        name: ' Sir Rao shafqat ',
        qulifiqation: ' MBA(Pu),  Phd(UK)'
    },
    {
        imgage: "./img/2.jpg",
        name: ' Sir Rao shafqat ',
        qulifiqation: ' MBA(Pu),  Phd(UK)'
    },{
        imgage: "./img/10.jpg",
        name: ' Sir Rao shafqat ',
        qulifiqation: ' MBA(Pu),  Phd(UK)'
    },
    {
        imgage: "./img/11.jpg",
        name: ' Sir Rao shafqat ',
        qulifiqation: ' MBA(Pu),  Phd(UK)'
    }
]
const Teacher = () => {
    return (
        <>
            <Nav />
            <div>
                <header style={{ display: 'flex', height: 300, background: '#EF7E1C', justifyContent: 'center', alignItems: 'center' }}>
                    <h2> <i classNameName="ri-presentation-fill"></i> Teachers</h2>
                </header>
                <section style={{ padding: '80px 0', margin: '0 auto', width: '80%', display: 'flex', gap: '6%', flexWrap: 'wrap', rowGap: 34 }}>
                    
                    
                    {Teachers.map((item , index) => {
                        return (
                            <div>
                                <img key={index} style={{ display:"flex", maxHeight:'190px' }} src={item.imgage} />
                                <h3 style={{ marginBottom: 2, padding: 0 }}>{item.name}</h3>
                                <p style={{ margin: 0, padding: 0, color: 'gray' }}> MBA(Pu),  Phd(UK)</p>
                            </div>
                        )
                    })}


                </section>
            </div>
            <Footer />
        </>
    )
}
export default Teacher