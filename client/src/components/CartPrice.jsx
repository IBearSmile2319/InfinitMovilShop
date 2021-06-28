import { Divider } from "antd"
import { Link } from "react-router-dom"

const CartPrice = (props) => {
    return (
        <>
            <div className="total-price">
                <div className="subtotal">
                    <p>DETALLES DEL PRECIO</p>
                    <div className="subtotal-price">
                        <div>Precio({props.totalItem} items)</div>
                        <div>S/.{props.totalPrice}</div>
                    </div>
                    <div className="subtotal-price">
                        <div>Delivery</div>
                        <div>FREE</div>
                    </div>
                    {props.link ?
                        <>
                            <Divider />

                            <Link to={props.link} className="btn-cart-checkout">
                                Completar la compra
                            </Link>
                        </>
                        : null
                    }

                </div>
            </div>
        </>
    )
}

export default CartPrice
