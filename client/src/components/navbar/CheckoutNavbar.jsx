import { Link } from "react-router-dom"
import Logo from "../../assets/img/Logo"
import { useEffect } from 'react';

const CheckoutNavbar = ({identificate}) => {
    const theme_dark = () => {
        const localthemecon = localStorage.getItem('theme');
        if (localthemecon === 'true') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }
    useEffect(() => {
        theme_dark();
    }, [])
    return (
        <nav className="container wrapper d-flex">
            <div className="item-center d-flex">
                <Link to="/" className="item-center">
                    <Logo />
                </Link>
            </div>
            {identificate === "true"?
                <p>
                    ¿Ya estás registrado?
            <Link to="/signin"> Identificarse</Link>
                </p> : null
            }

        </nav>
    )
}

export default CheckoutNavbar
