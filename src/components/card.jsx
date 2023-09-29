import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Card = ({name, price, image, id}) => {

    const link = `products/${id}`;  

    return (
        <Link to={link}>
            <div className="card">
                <img src={image} alt="" className="item-image" />
                <div className='item-name'>{name}</div>
                <span className="item-price"><strong>₹{price.toFixed(0)}</strong></span>
            </div>
        </Link>
    )
}

Card.propTypes = {
    name:propTypes.string,
    price:propTypes.number,
    image:propTypes.string,
    id:propTypes.number
}

export default Card;