import Card from "../components/Card"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Navbar from "../components/navbar/Navbar"
import Tittle from "../components/Tittle"
import Footer from '../components/Footer/Footer'
const ProductInfo = () => {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <MainContent>
                <Card>
                    <div className="productInfo_content">
                        <div className="productInfo-imgs">
                            <div className="productInfo-img-first">
                                <img src="https://i.ebayimg.com/images/g/jSMAAOSw4RhgrOkn/s-l500.jpg" alt="" />
                            </div>
                            <div className="productInfo-img-carouse">
                                {[...imgs].map(c =>
                                    <ul>
                                        <li>
                                            <img src={c.img} alt="" />
                                        </li>
                                    </ul>
                                )
                                }
                            </div>
                        </div>
                        <div className="productInfo-info">
                            <Tittle tittle="Hola" />
                        </div>
                    </div>
                </Card>
            </MainContent>
            <Footer />
        </>
    )
}

const imgs = [
    {
        img: "https://i.ebayimg.com/images/g/jSMAAOSw4RhgrOkn/s-l500.jpg"
    },
    {
        img: "https://i.ebayimg.com/images/g/jSMAAOSw4RhgrOkn/s-l500.jpg"
    },
    {
        img: "https://i.ebayimg.com/images/g/jSMAAOSw4RhgrOkn/s-l500.jpg"
    },
    {
        img: "https://i.ebayimg.com/images/g/jSMAAOSw4RhgrOkn/s-l500.jpg"
    },
    {
        img: "https://i.ebayimg.com/images/g/jSMAAOSw4RhgrOkn/s-l500.jpg"
    }
]

export default ProductInfo
