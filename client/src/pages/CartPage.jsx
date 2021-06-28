

import { Col, Empty, Row} from "antd"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart, getCartItems } from "../actions"
import Card from "../components/Card"
import CartItem from "../components/CartItem"
import CartPrice from "../components/CartPrice"
import Footer from "../components/Footer/Footer"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Navbar from "../components/navbar/Navbar"
import Tittle from "../components/Tittle"

const CartPage = (props) => {
    const cart = useSelector(state => state.cart)
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    // const cartItems = cart.cartItems
    const [cartItems, setCartItems] = useState(cart.cartItems)


    useEffect(() => {
        setCartItems(cart.cartItems)
    }, [cart.cartItems])
    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getCartItems())
        }
    }, [auth.authenticate])

    const onQuantityIncrement = (_id, qty) => {
        const { name, price, img } = cartItems[_id]
        dispatch(addToCart({ _id, name, price, img }))
    }
    const onQuantityDecrement = (_id, qty) => {
        const { name, price, img } = cartItems[_id]
        dispatch(addToCart({ _id, name, price, img }, -1))
    }
    return (
        <>

            <Header>
                <Navbar />
            </Header>
            <MainContent>
                <Card>
                    {Object.keys(cartItems).length ?
                        <Row>
                            <Col xs={24} md={18} sm={24}>
                                <div className="table-cart ">
                                    <Tittle tittle="Mi lista de compras." />
                                    <table className="cart-table">
                                        <tr>
                                            <th>Producto</th>
                                            <th>Cantidad</th>
                                            <th>subTotal</th>
                                        </tr>

                                        {Object.keys(cartItems).map((key, index) =>
                                            <CartItem
                                                key={index}
                                                cartItem={cartItems[key]}
                                                onQuantityInc={onQuantityIncrement}
                                                onQuantityDec={onQuantityDecrement}

                                            />
                                        )
                                        }


                                    </table>
                                </div>
                            </Col>
                            <Col xs={24} md={6} sm={24}>
                               <CartPrice
                                totalItem={Object.keys(cartItems).reduce((qty,key)=>{
                                    return qty+cartItems[key].qty
                                },0)}
                                totalPrice={Object.keys(cartItems).reduce((totalPrice,key)=>{
                                    const {price,qty}=cartItems[key]
                                    return totalPrice+price*qty
                                },0)}
                               link="/checkout"
                               />
                            </Col>
                        </Row>
                        : <Empty description={<span>
                            No hay productos agragados.
                        </span>}>
                            <Link to="/">
                                Ir al inicio
                            </Link>
                        </Empty>
                    }

                </Card>
            </MainContent>
            <Footer />
        </>
    )
}

export default CartPage
