import {Route,Switch} from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'

const GlobalRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" render={props=> <HomePage {...props}/>}/>
        </Switch>
    )
}

export default GlobalRoutes
