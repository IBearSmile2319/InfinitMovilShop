import Card from "../components/Card"
import HomeSplide from "../components/Home/HomeSplide"
// import PopularElement from "../components/Home/PopularElement"
import ProductsSplide from "../components/Home/ProductsSplide"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Navbar from "../components/navbar/Navbar"
import Tittle from "../components/Tittle"
import Footer from '../components/Footer/Footer'
import CardProductos from "../components/CardProductos"
import SplideSlide from "@splidejs/react-splide/dist/js/components/SplideSlide"
import { Badge } from "antd"
const HomePage = () => {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <HomeSplide />
            <MainContent>
                {/* <Card>
                    <Tittle tittle="Encuentra lo que necesitas" />
                    <PopularElement />
                </Card> */}
                <Card>
                    <Tittle tittle="Accesorios" link="/accesorios" />

                    <ProductsSplide>
                        {[...imgs].map(i =>
                            <SplideSlide key={i.id}>
                                <Badge.Ribbon color="orange" text="oferta">
                                    <CardProductos
                                        id={i.id}
                                        title="Televicion de alta gama esto es una prueba de error"
                                        price={"2000"}
                                        img={i.img}
                                    />
                                </Badge.Ribbon>
                            </SplideSlide>
                        )}
                    </ProductsSplide>


                </Card>
            </MainContent>
            <Footer />
        </>
    )
}

export default HomePage

const imgs = [
    {
        id: 1,
        img: "https://i.ebayimg.com/images/g/7JUAAOSwPf5fYd-c/s-l225.webp"
    },
    {
        id: 2,
        img: "https://i.ebayimg.com/images/g/lOsAAOSw8d5fx03L/s-l225.webp"
    },
    {
        id: 3,
        img: "https://i.ebayimg.com/images/g/OZMAAOSwIoNdIxbI/s-l225.webp"
    },
    {
        id: 4,
        img: "https://i.ebayimg.com/images/g/nbIAAOSwcW9giqco/s-l225.webp"
    },
    {
        id: 5,
        img: "https://i.ebayimg.com/images/g/t5oAAOSwthtfoesX/s-l225.webp"
    },
    {
        id: 6,
        img: "https://i.ebayimg.com/images/g/gAcAAOSwD6BgpPe7/s-l225.webp"
    },
    {
        id: 12,
        img: "https://i.ebayimg.com/images/g/7JUAAOSwPf5fYd-c/s-l225.webp"
    },
    {
        id: 21,
        img: "https://i.ebayimg.com/images/g/lOsAAOSw8d5fx03L/s-l225.webp"
    },
    {
        id: 31,
        img: "https://i.ebayimg.com/images/g/OZMAAOSwIoNdIxbI/s-l225.webp"
    },
    {
        id: 41,
        img: "https://i.ebayimg.com/images/g/nbIAAOSwcW9giqco/s-l225.webp"
    },
    {
        id: 51,
        img: "https://i.ebayimg.com/images/g/t5oAAOSwthtfoesX/s-l225.webp"
    },
    {
        id: 61,
        img: "https://i.ebayimg.com/images/g/gAcAAOSwD6BgpPe7/s-l225.webp"
    },
]