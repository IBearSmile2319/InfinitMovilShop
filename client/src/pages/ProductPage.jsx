import SplideSlide from "@splidejs/react-splide/dist/js/components/SplideSlide"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getProductPage } from "../actions"
import Card from "../components/Card"
import SplideBanners from "../components/SplideBanners"
import Tittle from "../components/Tittle"
import { publicUrl } from "../urlConfig"
import getParams from "../utils/getParams"

const ProductPage = (props) => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const { page } = product

    useEffect(() => {
        const params = getParams(props.location.search)
        const payload = {
            params
        }
        dispatch(getProductPage(payload))
    }, [])
    return (
        <>
            <Card>
                <>
                    <Tittle tittle={page.title} />
                    <SplideBanners>
                        {page.banners && page.banners.map((banner, index) =>
                            <SplideSlide key={index}>
                                <Link to="/">
                                    <img src={`${publicUrl}${banner.img}`} className="splide-img" alt="" />
                                </Link>
                            </SplideSlide>
                        )}

                    </SplideBanners>
                </>
            </Card>
            <Card>
                {page.products&& page.products.map((product,index)=>
                    <div className="" key={index}>
                        <img src={`${publicUrl}${product.img}`} alt="" />
                    </div>
                )}
            </Card>
        </>
    )
}

export default ProductPage
