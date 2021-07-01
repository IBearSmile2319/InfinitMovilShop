import Footer from "../components/Footer/Footer"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import CheckoutNavbar from "../components/navbar/CheckoutNavbar"

import {
    UserOutlined,
    SolutionOutlined,
    WalletOutlined,
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons'

import { Steps, Button, message, Divider, Empty, Radio, Space, Comment, Tooltip, Row, Col, Result } from 'antd';
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux"
// import ListAddress from "../components/userCheckoutPage.jsx/ListAddress"
import { addOrder } from "../actions"
import NewAddress from "../components/userCheckoutPage/NewAddress"
import Tittle from "../components/Tittle"
import CartPrice from "../components/CartPrice"
const { Step } = Steps;

const CheckoutPage = (props) => {

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    const [current, setCurrent] = useState(0);
    const [selectAddress, setSelectAddress] = useState(0)
    const [confirmAddress, setConfirmAddress] = useState(false)
    const [orderConfirmation, setOrderConfirmation] = useState(false)

    const [paymentType,setPaymentType]=useState('')

    const dispatch = useDispatch()

    const confirmDeliveryAddress = (addr) => {
        setSelectAddress(addr)
        setConfirmAddress(true)
    }

    const onConfirmOrder = () => {
        const totalAmount = Object.keys(cart.cartItems).reduce(
            (totalPrice, key) => {
              const { price, qty } = cart.cartItems[key];
              return totalPrice + price * qty;
            },
            0
          );
          const items = Object.keys(cart.cartItems).map((key) => ({
            productId: key,
            payablePrice: cart.cartItems[key].price,
            purchasedQty: cart.cartItems[key].qty,
          }));
        const payload = {
            addressId: selectAddress._id,
            totalAmount,
            items,
            paymentStatus: "pendiente",
            paymentType,
        }
        dispatch(addOrder(payload));
        setOrderConfirmation(true)
        message.success('Su pedido a sido confirmado!')
    }
    const ListAddress = (props) => {

        return (
            <>
                <Card>
                    <Tittle tittle="Direcciones de envio" />
                    {confirmAddress ?
                        <>
                            <p>{selectAddress.name}</p>
                            <p>{selectAddress.address}</p>
                            <p>{selectAddress.mobileNumber}</p>
                        </> :
                        <>
                            <Radio.Group onChange={(e) => setSelectAddress(e.target.value)} value={selectAddress}>
                                <Space direction="vertical">
                                    {user.address ?
                                        user.address.map((adr) =>
                                            <>
                                                <Radio value={adr._id}>
                                                    <Space direction='vertical'>


                                                        <Comment
                                                            actions={
                                                                [
                                                                    <Space >
                                                                        <Tooltip title="Entregar aquí y confirmar la orden">
                                                                            {selectAddress === adr._id &&
                                                                                <Button
                                                                                    type="primary"
                                                                                    shape='round'
                                                                                    onClick={() => confirmDeliveryAddress(adr)}
                                                                                >
                                                                                    Entregar aquí
                                                                                </Button>}
                                                                        </Tooltip>
                                                                        <Tooltip title="Editar">
                                                                            {selectAddress === adr._id &&
                                                                                <Button
                                                                                    type="default"
                                                                                    shape='circle'
                                                                                    icon={<EditOutlined />}
                                                                                />}
                                                                        </Tooltip>
                                                                        <Tooltip title="Eliminar">
                                                                            {selectAddress === adr._id &&
                                                                                <Button
                                                                                    shape='circle'
                                                                                    icon={<DeleteOutlined />} type="default"
                                                                                />
                                                                            }
                                                                        </Tooltip>
                                                                    </Space>
                                                                ]
                                                            }
                                                            style={{ color: 'var(--text-color-primary)' }}
                                                            author={adr.name}
                                                            content={<p>
                                                                {adr.address},
                                                                +51{adr.mobileNumber},
                                                                {adr.cityDistrictTown.toUpperCase()}
                                                            </p>}
                                                        />
                                                    </Space>
                                                </Radio>

                                            </>
                                        ) : <Empty description="No tienes dirección de envio." />
                                    }
                                </Space>
                            </Radio.Group>
                            <Divider />
                            <NewAddress />
                        </>
                    }
                </Card>
            </>
        )
    }

    const PaymentOptions = (props) => {
        return (
            <>
                <Row>
                    <Col xs={24} md={18} sm={24}>
                        <Card>
                            <Tittle tittle="Seleccione metodo de pago" />
                            <Radio.Group onChange={(e) => setPaymentType(e.target.value)} value={paymentType}>
                                <Space direction="vertical">
                                    <Radio value="contra entrega">
                                        Contra entrega
                                    </Radio>
                                </Space>
                            </Radio.Group>
                        </Card>
                    </Col>
                    <Col xs={24} md={6} sm={24}>
                        <CartPrice
                            totalItem={Object.keys(cart.cartItems).reduce((qty, key) => {
                                return qty + cart.cartItems[key].qty
                            }, 0)}
                            totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
                                const { price, qty } = cart.cartItems[key]
                                return totalPrice + price * qty
                            }, 0)}

                        />
                    </Col>
                </Row>
            </>
        )
    }


    

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        if (auth.authenticate) {
            setCurrent(current === 1 ? current : current - 1)
        } else {
            setCurrent(current - 1);
        }
    };
    useEffect(() => {
        if (auth.authenticate) {
            setCurrent(1)
        }
    }, [auth.authenticate])

    const steps = [
        {
            title: <span style={{ color: 'var(--text-color-primary)' }}>Cuenta</span>,
            content: 'hola',
            icon: <UserOutlined />
        },
        {
            title: <span style={{ color: 'var(--text-color-primary)' }}>Dirección</span>,
            content: <ListAddress />,
            icon: <SolutionOutlined />
        },
        {
            title: <span style={{ color: 'var(--text-color-primary)' }}>Metodo de pago</span>,
            content: <PaymentOptions />,
            icon: <WalletOutlined />
        },
    ];
    const operation = () => {
        // setOrderConfirmation(true)
        if (auth.authenticate) {
            next()
        } else {
            return 0
        }
    }
    return (
        <>
            <Header>
                <CheckoutNavbar />
            </Header>
            <MainContent>
                <Card>
                    {orderConfirmation ?
                        <Result
                            status="success"
                            title="Su pedido a sido confirmado!"
                            subTitle="¡Gracias!"
                            extra={[
                                <Button type="primary" key="console">
                                    ver pedido
                                </Button>,
                                <Button key="buy">Seguir conprando</Button>,
                            ]}
                        /> :
                        <>
                            <Steps size="small" current={current}>
                                {steps.map(item => (
                                    <Step key={item.title} title={item.title} icon={item.icon} />
                                ))}
                            </Steps>
                            <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action">
                                {current < steps.length - 1 && (
                                    <Button type="primary" disabled={auth.authenticate ? false : true} onClick={operation}>
                                        continuar
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button type="primary" onClick={onConfirmOrder}>
                                        Procesar pedido
                                    </Button>
                                )}
                                {current > 0 && (
                                    <Button disabled={current === 0 ? true : false} style={{ margin: '0 8px' }} onClick={() => prev()}>
                                        Regresar
                                    </Button>
                                )}
                            </div>
                        </>
                    }

                </Card>
            </MainContent>
            <Footer />
        </>
    )
}

export default CheckoutPage
