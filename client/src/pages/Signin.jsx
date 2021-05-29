import Card from "../components/Card"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Sessions from "../components/navbar/Sessions"
import { Link } from "react-router-dom"
import { ReactComponent as EyeOutline } from '../assets/img/ion-icons/eye-outline.svg'
import { ReactComponent as EyeOffOutline } from '../assets/img/ion-icons/eye-off-outline.svg'
import { ReactComponent as KeyOutline } from '../assets/img/ion-icons/key-outline.svg'
import { useState } from "react"
import Separator from "../components/Separator"
const Signin = () => {
    const [visible, setVisible] = useState("password")
    return (
        <>
            <Header>
                <Sessions />
            </Header>
            <MainContent>
                <Card>
                    <div className="form_group">
                        <h2>
                            Hola
                            <span>Identifícate en Infinit Movil Shop o <Link to="/signup">Unete</Link> </span>
                        </h2>
                        <div className="form_input-content">
                            <input type="text" className="form_field" placeholder="Username/E-mail" />
                            <label htmlFor="name" className="form_label">Username/E-mail</label>
                        </div>
                        <div className="form_input-content">
                            <input type={visible} className="form_field form-password" placeholder="********" />
                            <span>
                                {visible === "texto" ?
                                    <EyeOffOutline onClick={() => setVisible("password")} className="ion-icon" />
                                    :
                                    <EyeOutline onClick={() => setVisible("texto")} className="ion-icon" />
                                }
                            </span>
                            <label htmlFor="name" className="form_label">Contraseña</label>
                        </div>
                        <div className="btn form-btn">
                            <KeyOutline className="ion-icon" />
                            Inicia sesión
                        </div>
                        <Separator/>
                        <div className="form-help">
                            <span>
                                <input type="checkbox" value="true" className="form-check"/>
                                Seguir conectado
                            </span>
                            <p>¿Estás usando un 
                                dispositivo público o 
                                compartido? Quita la marca 
                                para proteger tu cuenta.</p>
                        </div>
                    </div>
                </Card>
            </MainContent>
        </>
    )
}

export default Signin
