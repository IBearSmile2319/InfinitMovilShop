import Footer from "../components/Footer/Footer"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Navbar from "../components/navbar/Navbar"

const OrderPage = (props) => {
    return (
        <>
         <Header>
                <Navbar />
            </Header>
            <MainContent>
orders
            </MainContent>
            <Footer/>
        </>
    )
}

export default OrderPage
