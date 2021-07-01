import { Link } from "react-router-dom"
import { ReactComponent as ExitIcon } from '../../../assets/img/ion-icons/exit-outline.svg'
import { useDispatch, useSelector } from 'react-redux'
import { Signout } from "../../../actions/auth.actions"
import Avatar from "antd/lib/avatar/avatar"
const UserMenu = ({ name, role, img, link }) => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(Signout())
    }
    return (
        <div className="menu-user-details">
            <div className="img-profile">
                <Link to="/account/profile">
                    <Avatar
                        size="large"
                        style={{ background: "var(--primary)"}}
                        src={auth.user.picture ? auth.user.picture : null}>
                        {auth.user.firstName.split('', 1)[0].toUpperCase()}
                    </Avatar>
                </Link>
            </div>
            <div className="">
                <p>
                    {name}
                    <span className={`role-${role}`}>{role}</span>
                </p>
                <div
                    onClick={logout}
                    className="btn btn-signup">
                    <ExitIcon className="ion-icon" />
                    Cerrar sesión
                </div>
            </div>
        </div>
    )
}
export default UserMenu
