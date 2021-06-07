
import { ReactComponent as SunnyIcon } from '../../../../assets/img/ion-icons/sunny.svg'
import { ReactComponent as MoonIcon } from '../../../../assets/img/ion-icons//moon.svg'

import { useEffect } from 'react'
import UserMenu from '../UserMenu'
const AdminSection = ({ page, children }) => {
    const DropdownUser = () => {
        const openMenu = () => {
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
                            }
                        }
                    }
                }
            }
        }, [])
        return (
            <li>
                <div className="dropdown-user">
                    <div className="nav__menu-user" >
                        <img onClick={openMenu} className="nav-menu-user-img" src="https://scontent.flim10-1.fna.fbcdn.net/v/t1.6435-9/65055474_847463008955321_7430851561670049792_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFz_efqNX2sSJkiC43FCv75tIw6rWDXvQO0jDqtYNe9A3jeHRAJbsTeTGbIVvYOxXqnYPRFZde36zGD596_-7t7&_nc_ohc=AFkLvHDXi-wAX_lY1Pz&_nc_ht=scontent.flim10-1.fna&oh=7bb62ea2e8647aa06fc6a83120dd9bcb&oe=60E15BEF" alt="" />
                    </div>
                    <ul className="nav__menu-menu" style={{ height: '200px' }} id="myDropdown">
                        <li>
                            <UserMenu
                            name="Orosco Vasquez, Maicol Manuel"
                            role="Developer"
                            />
                        </li>

                    </ul>
                </div>
            </li>
        )
    }

    return (
        <section className="admin-section">
            <nav>
                <div className="sidebar-button">
                    <i className="bx bx-menu"></i>
                    <span className="admin-page">{page}</span>
                </div>
                <ul>
                    <li>
                        <div className="nav_switch" id="nav_switch">
                            <span><SunnyIcon className="ion-icon" /></span>
                            <span><MoonIcon className="ion-icon" /></span>
                        </div>
                    </li>
                    <DropdownUser />
                    {/* <div className="admin-profile-details">
                            <img src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256__340.png" alt="profile" />
                            <span className="admin-name">Orosco Vasquez</span>
                            <i className="bx bx-chevron-down"></i>
                        </div> */}
                </ul>
            </nav>
            {children}
        </section>
    )
}

export default AdminSection
