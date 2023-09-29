import { Link } from "react-router-dom"

const Sidebar = () => {


    return(
        <ul className="shop-sidebar">
            <h2>Categories</h2>
            <li><Link to='/products/men' className="sidebar-link">Men</Link></li>
            <li><Link to='/products/women' className="sidebar-link">Women</Link></li>
            <li><Link to='/products/accessories' className="sidebar-link">Accessories</Link></li>
            <li><Link to='/products/tech' className="sidebar-link">Our Tech Store </Link></li>

        </ul>
    )
}

export default Sidebar