import Card from "../components/Card"
import HomeSplide from "../components/Home/HomeSplide"
import PopularElement from "../components/Home/PopularElement"
import ProductsSplide from "../components/Home/ProductsSplide"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Navbar from "../components/navbar/Navbar"
import Tittle from "../components/Tittle"
import Footer from '../components/Footer/Footer'
const HomePage = () => {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <HomeSplide/>
            <MainContent>
                <Card>
                    <Tittle tittle="Encuentra lo que necesitas" />
                    <PopularElement />
                </Card>
                <Card>
                    <Tittle tittle="Accesorios" link="/accesorios" />
                    <ProductsSplide />
                </Card>
                <Card>
                    <Tittle tittle="Accesorios" link="/accesorios" />
                    <ProductsSplide />
                </Card>
                <Card>
                    <Tittle tittle="Accesorios" link="/accesorios" />
                    <ProductsSplide />
                </Card>
            </MainContent>
            <Footer/>
        </>
    )
}

export default HomePage
