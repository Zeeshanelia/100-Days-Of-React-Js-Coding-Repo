import { Link } from "react-router-dom"
import './nav.css'

const menuItems = [
    {
        id: 1,
        label: "Home",
        href: '/'
    },
    {
        id: 2,
        label: "Teacher",
        href: '/teacher'
    },
    {
        id: 3,
        label: "Holiday",
        href: '/holiday'
    },
    {
        id: 4,
        label: "Contact us",
        href: '/contact-us'
    },
]

const Nav = () => {
    return (
        <nav style={{
            display: 'flex',
            background: 'white',
            justifyContent: 'space-between',
            padding: '8px 48px',
            boxShadow: '0 8px 8px 0 rgba(0,0,0,0.1)'

        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8
            }}>
                <img alt="School Logo"  src="./img/logo.png" width='60px' />
                <h2> School Code</h2>
            </div>

            <ul style={{
                listStyle: 'none',
                display: 'flex',
                alignItems: "center",
                gap: 20
            }}>
              {menuItems.map(item => (
                     (
                        <li key={item.id}>
                            <Link  to={item.href} style={{
                                textDecoration: 'none',
                                fontSize: "15px",
                                fontWeight: "800"
                            }} >{item.label}</Link>
                        </li>)
                 ))}
            </ul>
        </nav>
    )
}
export default Nav