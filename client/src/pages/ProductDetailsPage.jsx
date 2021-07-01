import { Button, Collapse, Empty, Image, Input, Rate, Space, Tooltip } from "antd"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, getProductDetailsById } from "../actions"
import Card from "../components/Card"
import Footer from "../components/Footer/Footer"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Navbar from "../components/navbar/Navbar"
import Tittle from "../components/Tittle"
import { generatePublicUrl} from "../urlConfig"

import { Splide, SplideSlide } from "@splidejs/react-splide"

import {
    ShoppingCartOutlined,
} from '@ant-design/icons'
import Title from "antd/lib/typography/Title"

const { Panel } = Collapse


const ProductDetailsPage = (props) => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const [detailImg, setDetailImg] = useState(0)

    const [quantity, setQuantity] = useState('')

    useEffect(() => {
        const { productId } = props.match.params
        const payload = {
            params: {
                productId
            }
        }
        dispatch(getProductDetailsById(payload))
    }, [])
    const quantityNumber = (e) => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            setQuantity(value)
        }
    }

    return (
        <>
            <Header>
                <Navbar/>
            </Header>
            <MainContent>
                <Card>
                    {Object.keys(product.productDetails).length ?
                        <div className="product-details-container container grid col-2 med-col-1">
                            {/* left */}
                            <div className="product-details-img">
                                <div className="ing-showcase">
                                    <Image
                                        className="ing-showcase-img"
                                        src={generatePublicUrl(product.productDetails.productPictures[detailImg].img)} />
                                </div>
                                <div className="ing-select">
                                    <Splide
                                        options={{
                                            perPage: product.productDetails.productPictures.length,
                                            pagination:false
                                        }}
                                    >
                                        {product.productDetails.productPictures.map((thumb, index) =>
                                            <SplideSlide>
                                                <div onClick={()=> setDetailImg(index)} className="ing-select-item">
                                                    <img onClick={()=> setDetailImg(index)} src={generatePublicUrl(thumb.img)} alt={thumb.img} />
                                                </div>
                                            </SplideSlide>
                                        )}
                                    </Splide>
                                </div>
                            </div>
                            {/* card right */}
                            <div className="product-details-content">
                                <Title style={{ color: "var(--text-color-primary)" }}>{product.productDetails.name}</Title>
                                <div className="product-rating">
                                    <Space>
                                        <Rate style={{ fontSize: 12 }} allowHalf defaultValue={3.5} />
                                        <span>4.7(21)</span>
                                    </Space>
                                </div>
                                <div className="product-details-price">
                                    <Space>
                                        <p className="last-price">Precio: <span>S/.{product.productDetails.price}</span></p>
                                        {product.productDetails.offer ?
                                            <p className="new-price">Nuevo precio por oferta: <span>S/.{product.productDetails.offer}</span></p>
                                            : null}

                                    </Space>
                                </div>

                                <div className="product-detail-description">

                                    <Tittle tittle="Descripción" />
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Ea unde earum cumque tempora eos hic commodi
                                        et, necessitatibus numquam vero deserunt magnam animi est sed saepe c
                                        upiditate. Laborum,
                                        enim delectus!
                                        {/* {product.productDetails.description} */}
                                    </p>
                                </div>
                                <div className="product-detail-responsive">
                                    <Collapse defaultActiveKey={['1']}>
                                        <Panel header="Descripcion">
                                            <p>{product.productDetails.description}</p>
                                        </Panel>
                                    </Collapse>
                                </div>
                                <div className="purchase-info">
                                    <Space>
                                        <Input disabled style={{ width: '50px' }} prefix="#" value={quantity ? quantity : 1} onChange={quantityNumber} placeholder="catidad" />
                                        <span>Stock: {product.productDetails.quantity}</span>
                                    </Space>
                                </div>
                                <Tooltip title="Añadir al carrito">
                                    <Button style={{ width: '100%', height: 50 }}
                                        icon={<ShoppingCartOutlined />}
                                        onClick={()=>{
                                            const {_id,name,price}=product.productDetails;
                                            const img=product.productDetails.productPictures[1].img
                                            dispatch(addToCart({_id,name,price,img}))
                                        }}
                                    >Añadir a la lista de compras</Button>
                                </Tooltip>
                            </div>
                        </div>

                        : <Empty description="Ese producto no encontrado en nuestra base de datos." />
                    }

                </Card>
            </MainContent>
            <Footer />
        </>
    )
}

export default ProductDetailsPage
