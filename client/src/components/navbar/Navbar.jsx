import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo'
import { ReactComponent as CaretDownOutlineIcon } from '../../assets/img/ion-icons/caret-down-outline.svg'
import { ReactComponent as SunnyIcon } from '../../assets/img/ion-icons/sunny.svg'
import { ReactComponent as MoonIcon } from '../../assets/img/ion-icons//moon.svg'
import { ReactComponent as MenuIcon } from '../../assets/img/ion-icons/menu.svg'

import {
  ShoppingCartOutlined,
  // SettingOutlined,
  // EditOutlined,
  // EllipsisOutlined 
} from '@ant-design/icons'

import { useSelector } from 'react-redux'
import UserMenu from './components/UserMenu'
import { Badge, Divider, Drawer, Dropdown, Menu } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'

const Navbar = () => {
  const auth = useSelector(state => state.auth)
  const category = useSelector(state => state.category);
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
  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category._id}>
          <Link to={`/product/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name}</Link>
          {category.children.length > 0 ?
            <ul className="nav__left--dropdown-links">
              {renderCategories(category.children)}
            </ul> : null
          }
        </li>
      )
    }
    return myCategories
  }
  // const renderCategoriesOne = (categories) => {
  //   let myCategories = [];
  //   for (let category of categories) {
  //     myCategories.push(
  //       <Menu.Item>
  //         <Link key={category._id} to={`/product/${category.slug}`}>{category.name}</Link>
  //       </Menu.Item>
  //     )
  //   }
  //   return myCategories
  // }
  const renderCategoriesOneDefault = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li>
          <Link key={category._id} to={`/product/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name}</Link>
        </li>
      )
    }
    return myCategories
  }
  const NavbarMenu = () => {
    const DropdownDefault = () => {
      const [visible, setVisible] = useState(false);
      const showDrawer = () => {
        setVisible(true);
      };

      const onClose = () => {
        setVisible(false);
      };
      return (
        <>
          <li>
            <div className="dropdown">
              <div onClick={showDrawer} className="nav__menu">
                <MenuIcon className="ion-icon" />
              </div>
              <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
              >
                <ul className="menu-default">
                  <li>
                    <div className="menu_sessions">
                      <Link to="/signin" className="btn login-menu">Inicia session</Link>
                      <Link to="/signup" className="btn register-menu">Comenzar</Link>
                    </div>
                  </li>
                  <Divider style={{color:'var(--text-color-primary)'}}>Categorias principales</Divider>
                  {renderCategoriesOneDefault(category.categories)}
                </ul>
              </Drawer>
            </div>
          </li>
          <li><Link to="/signin" className="btn login">Inicia session</Link></li>
          <li><Link to="/signup" className="btn register">Comenzar</Link></li>
        </>
      )
    }

    const DropdownUser = () => {
      const [visible, setVisible] = useState(false);
      const showDrawer = () => {
        setVisible(true);
      };

      const onClose = () => {
        setVisible(false);
      };
      const menuuser = (
        <Menu>
          <Menu.Item>
            <UserMenu
              name={auth.user.fullName}
              role={auth.user.role}
            />
          </Menu.Item>
          {auth.user.role === "admin" ?
            <Menu.Item>
              <Link to="/admin">Dashboard</Link>
            </Menu.Item> : null
          }
          <Menu.Item>
            <Link to="/profile">Mi Perfil</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/pedidos">Mis pedidos</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/pedidos">Lista de deseos</Link>
          </Menu.Item>

        </Menu>
      )
      return (
        <li>
          <div className="dropdown-menu-user mr-1 ml-2 pointer">
            <Dropdown overlay={menuuser} placement="bottomRight" arrow>
              <Avatar
                style={{ background: "var(--primary)" }}
                src={auth.user.picture ? auth.user.picture : null}>
                {auth.user.firstName.split('', 1)[0].toUpperCase()}
              </Avatar>
            </Dropdown>
          </div>
          <div className="drawer-menu-user mr-1 ml-2 pointer">
            <div onClick={showDrawer}>
              <Avatar
                style={{ background: "var(--primary)" }}
                src={auth.user.picture ? auth.user.picture : null}>
                {auth.user.firstName.split('', 1)[0].toUpperCase()}
              </Avatar>
            </div>
          </div>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <ul className="menu-default">
              <li>
                <UserMenu
                  name={auth.user.fullName}
                  role={auth.user.role}
                />
              </li>

              {auth.user.role === "admin" ?
                <li>
                  <Link to="/admin">Dashboard</Link>
                </li>

                : null
              }
              <li>
                <Link to="/profile">Mi Perfil</Link>
              </li>
              <li>
                <Link to="/pedidos">Mis pedidos</Link>
              </li>
              <li>
                <Link to="/pedidos">Lista de deseos</Link>
              </li>
              <Divider style={{color:'var(--text-color-primary)'}}>Categorias principales</Divider>
              {renderCategoriesOneDefault(category.categories)}
            </ul>
          </Drawer>
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
              {category.categories.length > 0 ? renderCategories(category.categories) : null}
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
          <li>
            <Link to="/shoppingcart">
              <Badge count={2} style={{ background: 'var(--secondary)' }}>
                <ShoppingCartOutlined style={{ fontSize: 27, color: 'var(--text-color-secondary)' }} />
              </Badge></Link>
          </li>
          <NavbarMenu />
        </ul>
      </div>
    </nav>
  )
}



export default Navbar
