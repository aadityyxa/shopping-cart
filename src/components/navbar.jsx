import Icon from '@mdi/react'
import { mdiCartOutline, mdiCarrot } from '@mdi/js'
import { Link } from 'react-router-dom'
import {PropTypes} from 'prop-types'


const Navbar = (props) => {
    
    return(
        <div className={props.page==='home'?"navbar home" : "navbar shop-navbar"}>
            <Link to='/' className='logo'>
                <Icon path={mdiCarrot} size={2} color={props.page==='shop'?"white":"black"} ></Icon>
                <h1>radish</h1>
            </Link>

            <div className="input-icons">
                <i className='fa fa-search icon'></i>
                <input type="search" className='input-field' name="search" id="search" placeholder="Search Products..." />
            </div>


            <div className="links">
                <ul className="nav-link-list">
                    <li className="link-1"><Link to='/products'>Shop</Link></li>
                    <li className="link-2">About</li>
                    <li><Icon path={mdiCartOutline} size={1}></Icon>  </li>
                </ul>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    page:PropTypes.string
}

export default Navbar