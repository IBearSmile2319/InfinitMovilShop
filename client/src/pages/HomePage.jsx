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
import { 
    // useDispatch, 
    useSelector } from "react-redux"
import { generatePublicUrl } from "../urlConfig"
import SplideCategoryProduct from "../components/Home/SplideCategoryProduct"
// import { getAllProducts } from "../actions"
// import { useEffect } from "react"
const HomePage = () => {
    const banners = useSelector(state => state.banners)
    const product = useSelector(state => state.product)
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(getAllProducts())
    // },[])

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
                    <Tittle tittle="SAMSUNG" link="/product/celular-samsung?cid=60dcd3bb3aad23001560fa75&type=store" />

                    <ProductsSplide>
                        {product.products.map((item, key) =>
                            <>
                                {product.products[key].category[0].name === "celular samsung" ?
                                    <SplideCategoryProduct
                                        data={item}
                                    /> : null
                                }

                            </>
                        )}
                    </ProductsSplide>


                </Card>
                <Card>
                    <Tittle tittle="HUAWEI" link="/product/celular-huawei?cid=60dd47143bae4a4cf815e270&type=store" />

                    <ProductsSplide>
                        {product.products.map((item, key) =>
                            <>
                                {product.products[key].category[0].name === "celular huawei" ?
                                    <SplideCategoryProduct
                                        data={item}
                                    /> : null
                                }

                            </>
                        )}
                    </ProductsSplide>


                </Card>
                <Card>
                    <Tittle tittle="Accesorios" link="/product/case-huawei?cid=60dd47fd3bae4a4cf815e276&type=store" />

                    <ProductsSplide>
                        {product.products.map((item, key) =>
                            <>
                                {product.products[key].category[0].name === "case huawei" ?
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
