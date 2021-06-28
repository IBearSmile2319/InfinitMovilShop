import { SplideSlide } from "@splidejs/react-splide"
import { Badge } from "antd"
import CardProductos from "../CardProductos"

const SplideCategoryProduct = (props) => {
    const {data}=props
    return (
        <>
            <SplideSlide>
                {data.offer?
                <Badge.Ribbon color="orange" text="oferta">
                <CardProductos
                    link={`/product/${data.slug}/${data._id}/p`}
                    id={data._id}
                    title={data.name}
                    price={data.price}
                    offer={data.offer}
                    img={data.productPictures[0].img}
                />
            </Badge.Ribbon>
                :
                // <Badge.Ribbon color="orange" text="oferta">
                    <CardProductos
                        link={`/product/${data.slug}/${data._id}/p`}
                        id={data._id}
                        title={data.name}
                        price={data.price}
                        offer={data.offer}
                        img={data.productPictures[0].img}
                    />
                // </Badge.Ribbon>
                }
                
            </SplideSlide>
        </>
    )
}

export default SplideCategoryProduct
