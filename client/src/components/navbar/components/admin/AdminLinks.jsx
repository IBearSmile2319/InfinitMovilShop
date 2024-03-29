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
                    <i class='bx bx-square-rounded'></i>
                    <span>Paginas</span>
                </Link>
            </li>
            <li>
                <Link to="/admin/orders">
                <i class='bx bxs-basket' ></i>
                    <span>Lista de pedidos</span>
                </Link>
            </li>
            <li>
                <Link to="/admin/banners">
                    <i class='bx bxs-file-image' ></i>
                    <span>Banner principal</span>
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
