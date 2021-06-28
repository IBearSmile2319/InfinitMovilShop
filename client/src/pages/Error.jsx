import Header from "../components/layout/Header/Header"
import Navbar from "../components/navbar/Navbar"
import Footer from '../components/Footer/Footer'
import MainContent from "../components/layout/content/MainContent"
import Card from "../components/Card"
import { Result } from "antd"
import { Link } from "react-router-dom"
const Error = () => {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <MainContent>
                <Card>
                    <Result
                        status="404"
                        title="404"
                        subTitle="Lo sentimos, la pagina que visitaste no existe."
                        extra={<Link to="/">Ir al inicio</Link>}
                    />
                </Card>
            </MainContent>
            <Footer />
        </>
    )
}

export default Error
