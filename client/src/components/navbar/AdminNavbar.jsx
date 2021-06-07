import Logo from '../../assets/img/Logo'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
const AdminNavbar = () => {
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
        let sidebar = document.querySelector('.sidebar')
        let sidebarBtn = document.querySelector('.sidebar-button')
        sidebarBtn.onclick = () => {
            sidebar.classList.toggle('active')
        }
    }
    useEffect(() => {
        theme_dark();
    }, [])
    return (
        <>
            <div className="sidebar">
                <div className="logo-details">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/admin/dashboard">
                            <i className="bx bx-grid-alt"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/categories">
                            <i className="bx bxs-category-alt"></i>
                            <span>Categorias</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard">
                            <i className="bx bx-box"></i>
                            <span>Productos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard">
                            <i className="bx bx-list-ul"></i>
                            <span>Lista de ordenes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard">
                            <i className="bx bx-pie-chart-alt-2"></i>
                            <span>Analytics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/users">
                            <i className="bx bxs-user-account"></i>
                            <span>Lista de usuarios</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default AdminNavbar
