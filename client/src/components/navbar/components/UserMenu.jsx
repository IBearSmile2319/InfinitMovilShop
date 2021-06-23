import { Link } from "react-router-dom"
import { ReactComponent as ExitIcon } from '../../../assets/img/ion-icons/exit-outline.svg'
import {useDispatch} from 'react-redux'
import { Signout } from "../../../actions/auth.actions"
const UserMenu = ({name,role,img,link}) => {
    const dispatch=useDispatch()
    const logout=()=>{
        dispatch(Signout())
    }
    return (
        <div className="menu-user-details">
            <div className="img-profile">
                <Link to="/">
                    <img src="https://scontent.flim10-1.fna.fbcdn.net/v/t1.6435-9/65055474_847463008955321_7430851561670049792_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFz_efqNX2sSJkiC43FCv75tIw6rWDXvQO0jDqtYNe9A3jeHRAJbsTeTGbIVvYOxXqnYPRFZde36zGD596_-7t7&_nc_ohc=AFkLvHDXi-wAX_lY1Pz&_nc_ht=scontent.flim10-1.fna&oh=7bb62ea2e8647aa06fc6a83120dd9bcb&oe=60E15BEF" alt="" />
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
