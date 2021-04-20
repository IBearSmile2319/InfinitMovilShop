import {Route,Switch} from 'react-router-dom'
import Error from '../Pages/404/Error'
import HomePage from '../Pages/Home/HomePage'
import Perfil from '../Pages/Perfil/Perfil'

const GlobalRoutes = () => {
    return (
        <Switch>
            <Route exact path="/perfil/:nombre" render={props=><Perfil {...props}/>}/>
            <Route exact path="/" render={props=> <HomePage {...props}/>}/>
            <Route exact path="/**" render={props=><Error {...props}/>}/>
        </Switch>
    )
}

export default GlobalRoutes
