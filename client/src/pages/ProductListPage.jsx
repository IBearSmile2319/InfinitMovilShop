import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Navbar from "../components/navbar/Navbar"
// ----------------

import Footer from "../components/Footer/Footer"
import ProductStore from "./ProductStore"
import getParams from "../utils/getParams"
import ProductPage from "./ProductPage"


const ProductListPage = (props) => {
    const renderProduct = () => {
        const params = getParams(props.location.search)
        let content = null
        switch (params.type) {
            case 'store':
                content = <ProductStore {...props} />
                break;
            case 'page':
                content = <ProductPage {...props} />
                break;
            default:
                content=null
                break;
        }
        return content
    }
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <MainContent>

                {renderProduct()}
            </MainContent>
            <Footer />
        </>
    )
}

export default ProductListPage
