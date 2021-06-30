
import { Button, Card, Col, Image, Row, Space, Steps, Tag } from "antd"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOrder } from "../actions"
import Cards from "../components/Card"
import Footer from "../components/Footer/Footer"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Navbar from "../components/navbar/Navbar"
import Tittle from "../components/Tittle"
import {
    FileMarkdownOutlined
} from '@ant-design/icons'
import Meta from "antd/lib/card/Meta"
import { generatePublicUrl } from "../urlConfig"
const { Step } = Steps;
const OrderDetailsPage = (props) => {
    const orderDetails = useSelector(state => state.user.orderDetails)
    const dispatch = useDispatch()
    // const [current, setCurrent] = useState(0)
    useEffect(() => {
        const payload = {
            orderId: props.match.params.orderId
        }
        dispatch(getOrder(payload))
    }, [])
    const formDate = (date) => {
        if (date) {
            const d = new Date(date)
            return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
        }
        return ""
    }
    const formatDate2 = (date) => {
        const month = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        if (date) {
            const d = new Date(date);
            return `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        }
    };
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <MainContent>
                <Cards>
                    <Tittle tittle={`Detalles del pedido #${props.match.params.orderId}`} />

                    <Row style={{ border: '1px solid var(--border-color)', margin: '10px 0 2px 0' }}>
                        <Col xs={24} md={8} sm={24} style={{ padding: 10 }}>
                            <Space direction="vertical">
                                <p>Destino del pedido:</p>
                                <span>Nombre: {orderDetails.address.name}</span>
                                <span>direccion: {orderDetails.address.address}</span>
                                <span>tel: +51 {orderDetails.address.mobileNumber}</span>
                            </Space>
                        </Col>
                        <Col xs={24} md={8} sm={24} style={{ padding: 10 }}>

                        </Col>
                        <Col xs={24} md={8} sm={24} style={{ padding: 10 }}>
                            <Button type="primary" icon={<FileMarkdownOutlined />}>
                                Descargar factura
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{ border: '1px solid var(--border-color)', margin: '10px 0 2px 0' }}>
                        <Col xs={24} md={8} sm={24}>
                            <span>Lista de pedidos</span>
                            {
                                orderDetails.items.map((item, index) =>
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
                                                    <p>S/.{item.payablePrice} PEN</p>
                                                    {/* <p>{order.orderStatus[0].date}</p> */}
                                                </>
                                            }
                                        />
                                    </Card>
                                )
                            }

                        </Col>
                        <Col xs={24} md={12} sm={8} style={{ padding: 10 }}>
                            <Steps
                                current=""
                                // onChange={e => onChange(e)}
                                direction="vertical"
                                size="small"
                                // onChange={()=>{}}
                                style={{ cursor: 'pointer' }}
                                progressDot
                            >
                                {orderDetails.orderStatus.map((status) =>
                                    <>
                                        {!status.isCompleted ?
                                            <Step title={status.type} description={formDate(status.date)} />
                                            :
                                            <Step title={status.type} description={`${formatDate2(status.date)} Completado `} />
                                        }

                                    </>
                                )}
                            </Steps>
                        </Col>
                        <Col xs={24} md={8} sm={24} style={{ padding: 10 }}>
                           
                        </Col>
                    </Row>
                </Cards>
            </MainContent>
            <Footer />
        </>
    )
}

export default OrderDetailsPage
