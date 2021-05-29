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
const Signup = () => {
    const [visible, setVisible] = useState("password")
    return (
        <>
            <Header>
                <Sessions identificate="true"/>
            </Header>
            <MainContent>
                <Card>
                    <div className="form_group">
                        <h2>
                            Crear una cuenta
                        </h2>
                        <Separator/>
                        <div className="form_input-content">
                            <input type="text" className="form_field" placeholder="Username" required />
                            <label htmlFor="name" className="form_label">Nombre de pila</label>
                        </div>
                        <div className="form_input-content">
                            <input type="text" className="form_field" placeholder="Nombres" required />
                            <label htmlFor="name" className="form_label">Nombres</label>
                        </div>
                        <div className="form_input-content">
                            <input type="text" className="form_field" placeholder="Apellidos" required />
                            <label htmlFor="name" className="form_label">Apellidos</label>
                        </div>
                        <div className="form_input-content">
                            <input type="email" className="form_field" placeholder="E-mail" required />
                            <label htmlFor="name" className="form_label">E-mail</label>
                        </div>
                        <div className="form_input-content">
                            <input type={visible} className="form_field form-password" placeholder="********" required />
                            <span>
                                {visible === "texto" ?
                                    <EyeOffOutline onClick={() => setVisible("password")} className="ion-icon" />
                                    :
                                    <EyeOutline onClick={() => setVisible("texto")} className="ion-icon" />
                                }
                            </span>
                            <label htmlFor="name" className="form_label">Contraseña</label>
                        </div>
                        <div className="form_input-content">
                            <input type={visible} className="form_field form-password" placeholder="********" required />
                            <span>
                                {visible === "texto" ?
                                    <EyeOffOutline onClick={() => setVisible("password")} className="ion-icon" />
                                    :
                                    <EyeOutline onClick={() => setVisible("texto")} className="ion-icon" />
                                }
                            </span>
                            <label htmlFor="name" className="form_label">Repite tu contraseña</label>
                        </div>
                        <div className="form-help-register">
                            <p>
                                Te enviaremos correos electrónicos
                                sobre ofertas relacionadas con nuestros
                                servicios periódicamente. Si quieres dejar
                                de recibirlos, puedes darte de baja en cualquier
                                momento, sin coste alguno, en Mi INIFINIT MOVIL SHOP, utilizando
                                el vínculo que aparece en los mensajes de correo electrónico.
                            </p>
                            <p>
                                Al pulsar Regístrate, confirmas haber leído y aceptado nuestras
                                <Link to="/condiciones"> Condiciones de uso.</Link> Para más información sobre el tratamiento
                                de tus datos, consulta nuestro <Link to="/privacidad">Aviso de privacidad</Link>.
                            </p>
                        </div>
                        <div className="btn form-btn">
                            <KeyOutline className="ion-icon" />
                            Inicia sesión
                        </div>
                    </div>
                </Card>
            </MainContent>
        </>
    )
}

export default Signup