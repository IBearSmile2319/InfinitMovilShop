
import { ReactComponent as SunnyIcon } from '../../../../assets/img/ion-icons/sunny.svg'
import { ReactComponent as MoonIcon } from '../../../../assets/img/ion-icons//moon.svg'
import { useState } from 'react';
import {Drawer, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/img/Logo';
import AdminLinks from './AdminLinks';
import Avatar from 'antd/lib/avatar/avatar';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu';


const AdminSection = ({ page, children }) => {
    const auth=useSelector(state=>state.auth)

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
          </Menu>
        )
        return (
          <li>
            <div className="dropdown-menu-user mr-1 ml-2 pointer">
              <Dropdown overlay={menuuser} placement="bottomRight" arrow>
                <Avatar
                  style={{ background: "var(--primary)" }}
                  src={auth.user.picture ? auth.user.picture : null}>
                  {auth.user.firstName.split('', 1)[0]}
                </Avatar>
              </Dropdown>
            </div>
            <div className="drawer-menu-user mr-1 ml-2 pointer">
              <div onClick={showDrawer}>
                <Avatar
                  style={{ background: "var(--primary)" }}
                  src={auth.user.picture ? auth.user.picture : null}>
                  {auth.user.firstName.split('', 1)[0]}
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
              </ul>
            </Drawer>
          </li>
        )
      }
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <section className="admin-section">
            <nav>
                <div className="sidebar-button">
                    <i className="bx bx-menu"></i>
                    <span className="admin-page">{page}</span>
                </div>
                <div onClick={showDrawer} className="sidebar-button-drawer">
                    <i className="bx bx-menu"></i>
                    <span className="admin-page">{page}</span>
                </div>
                <Drawer
                    placement="left"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <div className="sidebar-wrapper">
                        <div className="logo-details">
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                        <AdminLinks />
                    </div>
                </Drawer>
                <ul>
                    <li>
                        <div className="nav_switch" id="nav_switch">
                            <span><SunnyIcon className="ion-icon" /></span>
                            <span><MoonIcon className="ion-icon" /></span>
                        </div>
                    </li>
                    <DropdownUser/>
                </ul>
            </nav>
            {children}
        </section>
    )
}



export default AdminSection
