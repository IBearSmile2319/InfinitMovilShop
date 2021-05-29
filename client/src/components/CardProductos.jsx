import { Link } from "react-router-dom"
import { ReactComponent as BasketOutline } from '../assets/img/ion-icons/basket-outline.svg'
import { ReactComponent as HeartOutline } from '../assets/img/ion-icons/heart-outline.svg'
const CardProductos = ({ id, img, title, price, link }) => {
    return (

        <article className="card_product--content">

            <div className="card_product-icon">
                <ul>
                    <li>
                        <BasketOutline className="ion-icon" />
                    </li>
                    <li>
                        <HeartOutline className="ion-icon" />
                    </li>
                </ul>
            </div>
            <Link className="card_product-link" to="/nose">
                <div className="card_product-img">
                    <img src={img} alt="" />
                </div>
                <p>{title}</p>
                <span>S/.{price} PEN</span>
            </Link>
        </article>
    )
}

export default CardProductos
