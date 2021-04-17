import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../Assets/svg/Logo'
import  {ReactComponent as CaretDownOutlineIcon} from '../../Assets/svg/ion-icons/caret-down-outline.svg'
import  {ReactComponent as SunnyIcon} from '../../Assets/svg/ion-icons/sunny.svg'
import  {ReactComponent as MoonIcon} from '../../Assets/svg/ion-icons/moon.svg'
import  {ReactComponent as CartIcon} from '../../Assets/svg/ion-icons/cart.svg'
import  {ReactComponent as MenuIcon} from '../../Assets/svg/ion-icons/menu.svg'

const Navbar = () => {
  const theme_dark = () => {
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
  useEffect(() => {
    theme_dark();
  }, [])
  return (
    <div className="nav">
      <div className="container wrapper d-flex">
        <div className="item-center d-flex">
          <Link to="/" className="item-center">
            <Logo />
          </Link>
          <ul className="nav__left--links d-flex item-center">
            <li>
              <Link to="/">Productos<CaretDownOutlineIcon className="ion-icon"/></Link>
            </li>
            <li><Link to="/">Servicios</Link></li>
            {/* <li><Link to="/">Nosotros</Link></li> */}
          </ul>
        </div>
        <div className=" nav__center item-center d-flex">
          <input className="input" type="text" placeholder="Buscar producto" />
        </div>
        <div className="item-center d-flex">
          <ul className="nav__right--links d-flex item-center">
            <li>
              <div className="nav_switch" id="nav_switch">
                <span><SunnyIcon className="ion-icon"/></span>
                <span><MoonIcon className="ion-icon"/></span>
              </div>
            </li>
            {/* <li><Link to="/" className="nav__search"><ion-icon name="search"></ion-icon></Link></li> */}
            <li><Link to="/" className="relative nav__cart d-block"><CartIcon className="ion-icon"/><span>1</span></Link></li>
            <li><Link to="/" className="nav__menu"><MenuIcon className="ion-icon"/></Link></li>
            <li><Link to="/" className="btn login">Inicia session</Link></li>
            <li><Link to="/" className="btn register">Comenzar</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
