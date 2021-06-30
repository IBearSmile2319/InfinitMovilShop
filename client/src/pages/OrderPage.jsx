import { Button, Card, Col, Empty, Image, Row, Space, Tag } from "antd"
import Meta from "antd/lib/card/Meta"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getOrders } from "../actions"
import Cards from "../components/Card"
import Footer from "../components/Footer/Footer"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Navbar from "../components/navbar/Navbar"
import Tittle from "../components/Tittle"
import { generatePublicUrl } from "../urlConfig"

const OrderPage = (props) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders())
    }, [])

    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <MainContent>
                <Cards>
                    <Tittle tittle="Mis pedidos" />
                    {user.orders.length ?
                        <>
                            {
                                user.orders.map((order) =>
                                    <>
                                        <Row style={{ border: '1px solid var(--border-color)', margin: '10px 0 2px 0' }}>
                                            <Col xs={24} md={24} sm={24}>
                                                <Card style={{ border: 'none', borderBottom: '1px solid var(--border-color)' }}>
                                                    <>
                                                        <span>Precio total: S/.{order.totalAmount} PEN :</span>
                                                        <Link to={`/order_details/${order._id}`}> Ver detalles del pedido</Link>
                                                    </>
                                                </Card>
                                                {/* <Divider /> */}
                                            </Col>
                                            <Col xs={24} md={8} sm={24}>
                                                {order.items.map(item =>
                                                    <>
                                                        <Card style={{ border: 'none' }}>
                                                            <Meta
                                                                avatar={
                                                                    <Image
                                                                        src={generatePublicUrl(item.productId.productPictures[0].img)}
                                                                        width={80}
                                                                        height={80}
                                                                        style={{ objectFit: 'contain' }}
                                                                        alt={item.productId.name}
                                                                    />
                                                                }
                                                                title={item.productId.name}
                                                                description={
                                                                    <>
                                                                        <p>S/.{item.payablePrice} (x{item.purchasedQty})</p>


                                                                        {/* <p>{order.orderStatus[0].date}</p> */}
                                                                    </>
                                                                }
                                                            />
                                                        </Card>

                                                    </>
                                                )}
                                            </Col>
                                            <Col xs={24} md={8} sm={24}>
                                                <Card style={{ height: '100%', border: 'none' }}>
                                                    <Tittle tittle="Estado del pedido" />
                                                    {order.orderStatus[3].isCompleted ?
                                                        <Tag color="green">Completado</Tag>
                                                        : <Tag color="orange">{order.paymentStatus}</Tag>
                                                    }
                                                </Card>
                                            </Col>
                                            <Col xs={24} md={8} sm={24}>
                                                <Card style={{ height: '100%', border: 'none' }}>
                                                    <Space direction="vertical">
                                                        <Button>Seguir pedido</Button>
                                                        <Button type="primary" >Confirmar recepcion de pedido</Button>
                                                    </Space>
                                                </Card>
                                            </Col>



                                        </Row>
                                    </>


                                )

                            }
                        </> : <Empty />
                    }




                </Cards>
            </MainContent>
            <Footer />
        </>
    )
}

export default OrderPage
