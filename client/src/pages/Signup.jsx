// components
import Card from "../components/Card"
import MainContent from "../components/layout/content/MainContent"
import Header from "../components/layout/Header/Header"
import Sessions from "../components/navbar/Sessions"
import Separator from "../components/Separator"
import Footer from '../components/Footer/Footer'
// icons
import { ReactComponent as EyeOutline } from '../assets/img/ion-icons/eye-outline.svg'
import { ReactComponent as EyeOffOutline } from '../assets/img/ion-icons/eye-off-outline.svg'
import { ReactComponent as LockOutline } from '../assets/img/ion-icons/document-lock-outline.svg'
// functions
import { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../actions"

const Signup = () => {
    const [visible, setVisible] = useState("password")
    const auth=useSelector(state=>state.auth)
    const user=useSelector(state=>state.user)
    const dispatch = useDispatch()

    const [username,setUsername]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [repeatPassword,setRepeatPassword]=useState('')


    const userSignup=(e)=>{
        e.preventDefault();
        const dataUser={
            username,
            firstName,
            lastName,
            email,
            password,
            repeatPassword
        }
        dispatch(register(dataUser))
    }

    if(auth.authenticate){
        return <Redirect to="/"/>
    }

    if(user.loading){
        return <p>Loading....</p>
    }

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
                            <input type="text" className="form_field" 
                            placeholder="Username" 
                            required 
                            value={username}
                            onChange={e=>setUsername(e.target.value)}
                            />
                            <label htmlFor="name" className="form_label">Nombre de pila</label>
                        </div>
                        <div className="form_input-content">
                            <input type="text" className="form_field" 
                            placeholder="Nombres" 
                            required 
                            value={firstName}
                            onChange={e=>setFirstName(e.target.value)}
                            />
                            <label htmlFor="name" className="form_label">Nombres</label>
                        </div>
                        <div className="form_input-content">
                            <input type="text" className="form_field" 
                            placeholder="Apellidos" 
                            required 
                            value={lastName}
                            onChange={e=>setLastName(e.target.value)}
                            />
                            <label htmlFor="name" className="form_label">Apellidos</label>
                        </div>
                        <div className="form_input-content">
                            <input type="email" className="form_field" 
                            placeholder="E-mail" 
                            required 
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            />
                            <label htmlFor="name" className="form_label">E-mail</label>
                        </div>
                        <div className="form_input-content">
                            <input type={visible} className="form_field form-password" 
                            placeholder="********" 
                            required 
                            onChange={e=>setPassword(e.target.value)}
                            />
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
                            <input type={visible} className="form_field form-password" 
                            placeholder="********" 
                            required 
                            onChange={e=>setRepeatPassword(e.target.value)}
                            />
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
                        <div
                        onClick={userSignup} 
                        className="btn form-btn">
                            <LockOutline className="ion-icon" />
                            Registrar
                        </div>
                    </div>
                </Card>
            </MainContent>
            <Footer />
        </>
    )
}

export default Signup