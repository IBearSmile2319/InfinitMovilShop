import { useDispatch, useSelector } from "react-redux"
import AdminNavbar from "../../components/navbar/AdminNavbar"
import AdminSection from "../../components/navbar/components/admin/AdminSection"
import Cards from "../../components/Card"
import Tittle from "../../components/Tittle"
import { Card, Col, Empty, Image, Row, Steps, Tag } from "antd"
import { useState } from "react"
import { updateOrder } from "../../actions"
import Meta from "antd/lib/card/Meta"
import { generatePublicUrl } from "../../urlConfig"
const { Step } = Steps;
const Orders = () => {
    const order = useSelector(state => state.order)
    // const [current, setCurrent] = useState(0)
    const dispatch = useDispatch()
    const state = ["Primero", "segundo", "Tercelo", "Finalizado"]
    const onOrderUpdate = (e, id) => {
        const payload = {
            orderId: id,
            type: e,
        };
        dispatch(updateOrder(payload));
    };
    const onclick = (e) => {
        console.log(e)
    }
    return (
        <div className="admin">
            <AdminNavbar />
            <AdminSection page="Orders">
                <Cards>
                    <Tittle tittle="Lista de pedidos" />
                    {order.orders ?

                        order.orders.map((orderItem, key) =>
                            <>
                                <Row style={{ padding: 10, border: '1px solid var(--border-color)', margin: '10px 0 2px 0' }}>
                                    <Col style={{ borderBottom: '1px solid var(--border-color)' }} xs={24} md={24} sm={24}>
                                        <p >{`ID de pedido: ${orderItem._id}`}</p>

                                    </Col>
                                    <Col xs={24} md={6} sm={24}>
                                        <span>Lista de pedidos</span>
                                        {
                                            orderItem.items.map((item, index) =>
                                                <Card style={{ border: 'none' }}>
                                                    <Meta
                                                        avatar={
                                                            <Image
                                                                src={generatePublicUrl(item.productId.productPictures[0].img)}
                                                                width={80}
                                                                height={80}
                                                                style={{ objectFit: 'contain' }}
                                                                alt=""
                                                            />
                                                        }
                                                        title={item.productId.name}
                                                        description={
                                                            <>
                                                                <p>S/.{item.payablePrice} PEN (x{item.purchasedQty})</p>
                                                                {/* <p>{order.orderStatus[0].date}</p> */}
                                                            </>
                                                        }
                                                    />
                                                </Card>
                                            )
                                        }

                                    </Col>
                                    <Col xs={24} md={6} sm={24} style={{ padding: 10 }}>
                                        <p>Precio Total:</p>
                                        <span>S/.{orderItem.totalAmount} PEN</span>
                                    </Col>
                                    <Col xs={24} md={6} sm={24} style={{ padding: 10 }}>
                                        <p>Metodo de pago:</p>
                                        <span>{orderItem.paymentType}</span>
                                    </Col>
                                    <Col xs={24} md={6} sm={24} style={{ padding: 10 }}>
                                        <p>Estado del pedido:</p>
                                        {orderItem.orderStatus[3].isCompleted ?
                                            <Tag color="green">Completado</Tag>
                                            : <Tag color="orange">{orderItem.paymentStatus}</Tag>
                                        }
                                    </Col>
                                    <Col xs={24} md={24} sm={24} style={{ padding: 10 }}>
                                        <Steps
                                            // current={}
                                            // onChange={e => onChange(e)}
                                            direction="vertical"
                                            size="small"
                                            // onChange={()=>{}}
                                            style={{ cursor: 'pointer' }}
                                            progressDot
                                        >
                                            {orderItem.orderStatus.map((status, key) =>
                                                <>
                                                    {!status.isCompleted ?
                                                        <Step onClick={() => onOrderUpdate(status.type, orderItem._id)} title={status.type} description={state[key]} />
                                                        : null
                                                        // <Step title={status.type} description="Completado"/>
                                                    }

                                                </>
                                            )}
                                        </Steps>
                                    </Col>
                                </Row>
                            </>
                        )

                        : <Empty />
                    }
                </Cards>
            </AdminSection>
        </div>
    )
}

export default Orders
