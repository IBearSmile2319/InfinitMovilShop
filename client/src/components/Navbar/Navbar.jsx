import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Menu from '../../assets/svg/menu.svg'
const Navbar = () => {

    const theme = () => {
        const themecheck = document.getElementById('nav_switch');
        const localthemecon = localStorage.getItem('theme');
        themecheck.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themecheck.classList.toggle('active');
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'true');
            } else {
                localStorage.setItem('theme', 'false');
            }
        })
        if (localthemecon === 'true') {
            document.body.classList.add('dark-theme');
            themecheck.classList.add('active');
        } else {
            document.body.classList.remove('dark-theme');
            themecheck.classList.remove('active');
        }
    }
    const abrir=()=>{
        document.getElementById('dropdown-menu').classList.toggle("show");
    }
    const dropdown=()=>{
        window.onclick=(e)=>{
            if(!e.target.matches('.bars-icon')){
                var dropdowns=document.getElementsByClassName("dropdown-content-menu");
            for(var i=0; i < dropdowns.length; i++){
                var openDropdown=dropdowns[i];
                if(openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show')
                }
            }
        }
        }
    }
    useEffect(() => {
        theme();
        dropdown();
    }, [])

    return (
        <div className="nav__containt">
            <div className="wrapper containt">
                <div className="nav__left">
                    <Link to="#" className="nav__left__logo">LOGO</Link>
                    <ul className="nav__left__links">
                        <li><Link to="#">Productos <i className="icon-down fas fa-chevron-down"></i></Link></li>
                        <li><Link to="#">Servicios</Link></li>
                        <li><Link to="#">Nosotros</Link></li>
                    </ul>
                </div>
                <div className="nav__right">
                    <ul className="nav__right__links">
                        <li>
                            <button className="nav_switch" id="nav_switch">
                                <span><i className="fas fa-sun"></i></span>
                                <span><i className="fas fa-moon"></i></span>
                            </button>
                        </li>
                        <li><Link to="#" className="nav__search"><i className="fas fa-search"></i></Link></li>
                        <li><Link to="#" className="nav__cart"><i className="fas fa-shopping-cart"></i><span>1</span></Link></li>
                        <li><Link to="#" className="btn login">Inicia session</Link></li>
                        <li><Link to="#" className="btn register">Comenzar</Link></li>
                        <li>
                            <div className="nav__dropdown-menu">
                                <span className="bars"><img onClick={abrir} className="bars-icon" src={Menu} alt=""/></span>
                                <ul id="dropdown-menu" className="dropdown-content-menu">
                                    <div className="nav__btns">
                                        <Link to="#" className="btn login-menu">Inicia session</Link>
                                        <Link to="#" className="btn register-menu">Comenzar</Link>
                                    </div>
                                    <li><Link to="#">Productos</Link></li>
                                    <li><Link to="#">Servicios</Link></li>
                                    <li><Link to="#">Nosotros</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
