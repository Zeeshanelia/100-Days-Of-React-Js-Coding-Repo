import { Link } from "react-router-dom"
import AddToCart from "./AddToCart"

const Header = () => {
    return (
        <header>

            <nav>
                <ul>
                    <li><Link to="/" >MyShop </Link></li>

                </ul>
            </nav>
            <AddToCart />
        </header>
    )
}

export default Header