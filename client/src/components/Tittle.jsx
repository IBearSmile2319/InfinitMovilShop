import { Link } from "react-router-dom"
import {ReactComponent as ArrowForward} from '../assets/img/ion-icons/arrow-forward-outline.svg'
const Tittle = ({tittle,link,props}) => {
    return (
        <h2 className="title" {...props}>{tittle}
        {link?<Link to={link}>Ver más<ArrowForward className="ion-icon"/></Link>:null }
        
        </h2>
    )
}

export default Tittle
