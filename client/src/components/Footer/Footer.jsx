import { Link } from 'react-router-dom'
import { ReactComponent as FaceIcon } from '../../assets/img/ion-icons/logo-facebook.svg'
import { ReactComponent as TwitterIcon } from '../../assets/img/ion-icons/logo-twitter.svg'
import { ReactComponent as HomeIcon } from '../../assets/img/ion-icons/home.svg'
import { ReactComponent as MailIcon } from '../../assets/img/ion-icons/mail.svg'
import { ReactComponent as CallIcon } from '../../assets/img/ion-icons/call.svg'
const Footer = () => {
    return (
        <footer className="container">
            <div className="footer">
                <div className="footer-container grid col-3 med-col-1 peq-col-1">
                    <div className="footer-colum1 ">
                        <h2 >Información de la empresa</h2>
                        <p>
                            VENTA DE CELULARES Y LO MAS NUEVO
                            EN ACCESORIOS PARA CELULAR Y COMPUTO
                            (MICAS DE VIDRIOS, CARCASAS, AUDÍFONOS,
                            BATERÍAS, TECLADOS, PARLANTES, MOUSE)
                            SERVICIO TECNICO Y MUCHO MAS...
                    </p>
                    </div>
                    <div className="footer-colum2">
                        <h2>Redes sociales</h2>
                        <ul>
                            {[...redes].map(i =>
                                <li key={i.id}>
                                    <div>
                                        <a href={i.link} target="_blank">
                                            {i.icon} <span>{i.name}</span>
                                        </a>
                                    </div>
                                </li>

                            )}
                        </ul>
                    </div>
                    <div className="footer-colum2">
                        <h2>Información de contacto</h2>
                        <ul>
                            {[...contact].map(c =>
                                <li key={c.id}>
                                    <div>
                                        <a href={c.link} target="_blank">
                                            {c.icon}
                                            <span className="footer-location">
                                                {c.name}
                                            </span>
                                        </a>
                                    </div>
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
                <div className="copyright grid peq-col-1 med-col-2 col-2">
                    <div className="copyright-left">
                        &copy; 2021 Todos los Derechos reservados |
                        <span> MagicMoon</span>
                    </div>
                    <div className="copyright-right">
                        <ul>
                            <li>
                                <Link to="/">
                                    Informacion
                                </Link>
                            </li>
                            |
                            <li>
                                <Link to="/">
                                    politicas de privacidad
                                </Link>
                            </li>
                            |
                            <li>
                                <Link to="/">
                                    Terminos y condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer



const redes = [
    {
        id:12,
        link: "https://www.facebook.com/InfinitMovilShop",
        icon: <FaceIcon className="ion-icon" />,
        name: "Siguenos en facebook"
    },
    {
        id:21,
        link: "/",
        icon: <TwitterIcon className="ion-icon" />,
        name: "Siguenos en Twitter"
    },
]
const contact = [
    {
        id:31,
        link: "https://goo.gl/maps/iQuyRXVKYgNzVw979",
        icon: <HomeIcon className="ion-icon" />,
        name: " Jr. Alfonso de Alvarado N°. 768.Ref(Costado de WINTAC y/o de MARCIMEX)."
    },
    {
        id:41,
        link: "mailto:infinit.movilshop@gmail.com",
        icon: <MailIcon className="ion-icon" />,
        name: "infinit.movilshop@gmail.com"
    },
    {
        id:51,
        link: "tel:956722497",
        icon: <CallIcon className="ion-icon" />,
        name: "+51 956 722 497"
    }
]