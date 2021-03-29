import {Switch,Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
const GlobalRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" render={props=> <Home {...props}/>}/>
        </Switch>
    )
}
export default GlobalRoutes
