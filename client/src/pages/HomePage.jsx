import Card from "../components/Card"
import HomeSplide from "../components/Home/HomeSplide"
// import PopularElement from "../components/Home/PopularElement"
import ProductsSplide from "../components/Home/ProductsSplide"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Navbar from "../components/navbar/Navbar"
import Tittle from "../components/Tittle"
import Footer from '../components/Footer/Footer'
import { SplideSlide } from "@splidejs/react-splide"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { generatePublicUrl } from "../urlConfig"
import SplideCategoryProduct from "../components/Home/SplideCategoryProduct"
const HomePage = () => {
    const banners = useSelector(state => state.banners)
    const product = useSelector(state => state.product)

    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <HomeSplide >
                {banners.banners.map((item, key) =>
                    <SplideSlide key={key}>
                        <Link to="/">
                            <img src={generatePublicUrl(item.banners)} className="splide-img" alt={item.id} />
                        </Link>
                    </SplideSlide>
                )
                }
            </HomeSplide>
            <MainContent>
                {/* <Card>
                    <Tittle tittle="Encuentra lo que necesitas" />
                    <PopularElement />
                </Card> */}
                <Card>
                    <Tittle tittle="Samsung" link="/accesorios" />

                    <ProductsSplide>
                        {product.products.map((item, key) =>
                            <>
                                {product.products[key].category[0].name === "Samsung" ?
                                    <SplideCategoryProduct
                                        data={item}
                                    /> : null
                                }

                            </>
                        )}
                    </ProductsSplide>


                </Card>
                <Card>
                    <Tittle tittle="celular" link="/celular" />

                    <ProductsSplide>
                        {product.products.map((item, key) =>
                            <>
                                {product.products[key].category[0].name === "celular" ?
                                    <SplideCategoryProduct
                                        data={item}
                                    /> : null
                                }

                            </>
                        )}
                    </ProductsSplide>


                </Card>
            </MainContent>
            <Footer />
        </>
    )
}

export default HomePage
