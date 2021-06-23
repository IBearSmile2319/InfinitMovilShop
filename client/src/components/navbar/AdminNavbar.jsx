import Logo from '../../assets/img/Logo'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import AdminLinks from './components/admin/AdminLinks';
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
                <AdminLinks/>
            </div>

        </>
    )
}

export default AdminNavbar
