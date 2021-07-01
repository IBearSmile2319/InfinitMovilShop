import { Avatar, Button, Card, Col, List, Row, Tag } from "antd"
import { useSelector } from "react-redux"
import Cards from "../components/Card"
import Footer from "../components/Footer/Footer"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Navbar from "../components/navbar/Navbar"
import Tittle from "../components/Tittle"

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card
const Perfil = () => {
    const auth = useSelector(state => state.auth)
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <MainContent>
                <Cards>
                    <Tittle tittle="Perfil" />
                    <Row>
                        <Col xs={24} md={6} sm={24} style={{ padding: 10 }}>
                            <Card
                                style={{ margin: '0 auto' }}
                                actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    avatar={
                                        <Avatar
                                            size={{ xs: 40, sm: 40, md: 40, lg: 64, xl: 80, xxl: 100 }}
                                            style={{ background: "var(--primary)" }}
                                            src={auth.user.picture ? auth.user.picture : null}>
                                            {auth.user.firstName.split('', 1)[0]}
                                        </Avatar>
                                    }
                                    title={auth.user.username}
                                    description={

                                        <Tag color={auth.user.role === 'admin' ? 'red' : 'green'}>{auth.user.role}</Tag>
                                    }


                                />
                            </Card>
                        </Col>
                        <Col xs={24} md={18} sm={24} style={{ padding: 10 }}>
                            <List
                                itemLayout="horizontal"
                                bordered

                            >
                                <List.Item>
                                    <List.Item.Meta
                                        title="Username"
                                        description={auth.user.username}
                                    />

                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        title="Nombre completo"
                                        description={auth.user.fullName}
                                    />

                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        title="Nombres"
                                        description={auth.user.firstName}
                                    />

                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        title="Apellidos"
                                        description={auth.user.lastName}
                                    />

                                </List.Item>
                                <List.Item>
                                    <List.Item.Meta
                                        title="Correo"
                                        description={auth.user.email}
                                    />

                                </List.Item>
                            </List>
                            <List
                                itemLayout="horizontal"
                                bordered
                                style={{marginTop:20}}
                            >
                                <List.Item>
                                    
                                </List.Item>
                            </List>
                        </Col>
                    </Row>
                </Cards>
            </MainContent>
            <Footer />
        </>
    )
}

export default Perfil
