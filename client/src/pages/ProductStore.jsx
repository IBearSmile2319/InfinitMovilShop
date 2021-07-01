import Card from "../components/Card"
import Tittle from "../components/Tittle"

import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../actions'

import { useEffect } from "react"
import { Badge } from "antd"
import ProductsSplide from "../components/Home/ProductsSplide"
import SplideSlide from "@splidejs/react-splide/dist/js/components/SplideSlide"
import CardProductos from "../components/CardProductos"

const ProductStore = (props) => {
    const product = useSelector(state => state.product)
    const priceRange=product.priceRange
    const dispatch = useDispatch()
    useEffect(() => {
        const { match } = props
        dispatch(getProductsBySlug(match.params.slug))
        
    }, [])
    return (
        <>
            {Object.keys(product.productsByPrice).map((key) => {
                return (
                    <>
                        {product.productsByPrice[key].length ?
                            <Card>
                                <Tittle tittle={`${props.match.params.slug} S/.${priceRange[key]} PEN`} />
                                <ProductsSplide>
                                    {
                                        product.productsByPrice[key].map(product =>
                                            <SplideSlide>
                                                {product.offer ?
                                                    <Badge.Ribbon color="orange" text="oferta">
                                                        <CardProductos
                                                            id={product._id}
                                                            title={product.name}
                                                            price={product.price}
                                                            img={product.productPictures[0].img}
                                                            link={`/product/${product.slug}/${product._id}/p`}
                                                        />
                                                    </Badge.Ribbon> :
                                                    // <Badge.Ribbon color="orange" text="oferta">
                                                    <CardProductos
                                                        id={product._id}
                                                        title={product.name}
                                                        price={product.price}
                                                        img={product.productPictures[0].img}
                                                        link={`/product/${product.slug}/${product._id}/p`}
                                                    />
                                                    // </Badge.Ribbon>
                                                }

                                            </SplideSlide>)
                                    }

                                </ProductsSplide>
                            </Card>
                            : null
                        }
                    </>

                );
            })}
        </>
    )
}

export default ProductStore
