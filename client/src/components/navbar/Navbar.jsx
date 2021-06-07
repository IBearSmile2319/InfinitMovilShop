import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo'
import { ReactComponent as CaretDownOutlineIcon } from '../../assets/img/ion-icons/caret-down-outline.svg'
import { ReactComponent as SunnyIcon } from '../../assets/img/ion-icons/sunny.svg'
import { ReactComponent as MoonIcon } from '../../assets/img/ion-icons//moon.svg'
import { ReactComponent as CartIcon } from '../../assets/img/ion-icons/cart.svg'
import { ReactComponent as MenuIcon } from '../../assets/img/ion-icons/menu.svg'
import { ReactComponent as ExitIcon } from '../../assets/img/ion-icons/exit-outline.svg'

import { useSelector } from 'react-redux'
import UserMenu from './components/UserMenu'
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
    if (document.body.classList.contains("overflow")) {
      document.body.classList.remove("overflow")
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
        <ul className="nav__left--links item-center">
          <li>
            <Link to="/">
              <p>Mostrar todas<span >las categorias</span></p>
              <CaretDownOutlineIcon className="ion-icon" />
            </Link>
            <ul className="nav__left--dropdown">
              {categorias.map((name) => (
                <li key={Math.random() * (1 - 100)}>
                  <Link to={`/${name.name}`}>{name.name}</Link>
                  <ul className="nav__left--dropdown-links">
                    {[...name.subcategorias].map(cate => (
                      <li key={Math.random() * (100 - 200)}><Link to={`/${cate}`}>{cate}</Link></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      {/* <div className=" nav__center item-center d-flex">
          <input className="input" type="text" placeholder="Buscar producto" />
        </div> */}
      <div className="item-center d-flex">
        <ul className="nav__right--links d-flex item-center">
          <li>
            <div className="nav_switch" id="nav_switch">
              <span><SunnyIcon className="ion-icon" /></span>
              <span><MoonIcon className="ion-icon" /></span>
            </div>
          </li>
          <li><Link to="/" className="relative nav__cart d-block"><CartIcon className="ion-icon" /><span>1</span></Link></li>
          <NavbarMenu />
        </ul>
      </div>
    </nav>
  )
}

const NavbarMenu = () => {
  const auth = useSelector(state => state.auth)

  // links
  const Links = () => {
    return (
      <>
        {
          [...categorias].map(c =>
            <li>
              <Link to="/">{c.name}</Link>
            </li>
          )
        }
      </>
    )

  }

  const DropdownDefault = () => {
    const openMenu = () => {
      document.body.classList.toggle("overflow")
      document.getElementById("myDropdown").classList.toggle('active')
    }
    useEffect(() => {
      window.onclick = (e) => {
        if (!e.target.matches('.ion-icon')) {
          if (!e.target.matches('.nav__menu')) {
            var dropdowns = document.getElementsByClassName("nav__menu-menu")
            for (var i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i]
              if (openDropdown.classList.contains("active")) {
                openDropdown.classList.remove("active")
                document.body.classList.remove("overflow")
              }
            }
          }
        }
      }
    }, [])
    return (
      <>
        <li>
          <div className="dropdown">
            <div onClick={openMenu} className="nav__menu">
              <MenuIcon className="ion-icon" />
            </div>
            <ul className="nav__menu-menu" id="myDropdown">
              <li>
                <div className="menu_sessions">
                  <Link to="/signin" className="btn login-menu">Inicia session</Link>
                  <Link to="/signup" className="btn register-menu">Comenzar</Link>
                </div>
              </li>
              <Links />
            </ul>
          </div>
        </li>
        <li><Link to="/signin" className="btn login">Inicia session</Link></li>
        <li><Link to="/signup" className="btn register">Comenzar</Link></li>
      </>
    )
  }
  const DropdownUser = () => {
    const openMenu = () => {
      document.body.classList.toggle("overflow")
      document.getElementById("myDropdown").classList.toggle('active')
    }
    useEffect(() => {
      window.onclick = (e) => {
        if (!e.target.matches('.ion-icon')) {
          if (!e.target.matches('.nav-menu-user-img')) {
            var dropdowns = document.getElementsByClassName("nav__menu-menu")
            for (var i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i]
              if (openDropdown.classList.contains("active")) {
                openDropdown.classList.remove("active")
                document.body.classList.remove("overflow")
              }
            }
          }
        }
      }
    }, [])
    return (
      <li>
        <div className="dropdown-user">
          <div className="nav__menu-user">
            <img onClick={openMenu} className="nav-menu-user-img" src="https://scontent.flim10-1.fna.fbcdn.net/v/t1.6435-9/65055474_847463008955321_7430851561670049792_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFz_efqNX2sSJkiC43FCv75tIw6rWDXvQO0jDqtYNe9A3jeHRAJbsTeTGbIVvYOxXqnYPRFZde36zGD596_-7t7&_nc_ohc=AFkLvHDXi-wAX_lY1Pz&_nc_ht=scontent.flim10-1.fna&oh=7bb62ea2e8647aa06fc6a83120dd9bcb&oe=60E15BEF" alt="" />
          </div>
          <ul className="nav__menu-menu" id="myDropdown">
            <li>
              <UserMenu
                name="Orosco Vasquez, Maicol Manuel"
                role="Developer"
              />
            </li>
            <Links />
          </ul>
        </div>
      </li>
    )
  }




  return (
    <>
      {auth.authenticate ?
        <DropdownUser />
        :
        <DropdownDefault />
      }

    </>
  )
}


// links


const categorias = [
  {
    name: "Accesorios para celulares",
    subcategorias: ["Celulares", "Cargadores", "Micas de vidrio", "Carcasas", "audifonos", "Cable de datos"]
  },
  {
    name: "Accesorios para pc",
    subcategorias: ["Celulares", "Cargadores", "Micas de vidrio", "Carcasas", "audifonos", "Cable de datos"]
  },
  {
    name: "Accesorios para pc",
    subcategorias: ["Celulares", "Cargadores", "Micas de vidrio", "Carcasas",]
  },
  {
    name: "Accesorios para pc",
    subcategorias: ["Celulares", "Cargadores", "Micas de vidrio", "Carcasas", "audifonos", "Cable de datos", "audifonos", "Cable de datos", "audifonos", "Cable de datos"]
  },
  {
    name: "Accesorios para pc",
    subcategorias: ["Celulares", "Cargadores", "Micas de vidrio", "Carcasas", "audifonos", "Cable de datos"]
  },
  {
    name: "Accesorios para pc",
    subcategorias: ["Celulares", "Cargadores", "Micas de vidrio", "Carcasas", "audifonos", "Cable de datos"]
  }
]
export default Navbar
