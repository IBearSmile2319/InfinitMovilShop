import { Link } from "react-router-dom"

const AdminLinks = () => {
    return (
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
                <Link to="/admin/products">
                    <i className="bx bx-box"></i>
                    <span>Productos</span>
                </Link>
            </li>
            <li>
                <Link to="/admin/pages">
                    <i className="bx bx-box"></i>
                    <span>Paginas</span>
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
    )
}

export default AdminLinks
