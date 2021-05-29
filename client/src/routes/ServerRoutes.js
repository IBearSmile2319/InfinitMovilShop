import Error from '@pages/Error'
import HomePage from '@pages/HomePage'
import Perfil from '@pages/Perfil'
const routes=[
    {
        exact:true,
        path:'/',
        render:HomePage
    },
    {
        exact:true,
        path:'/perfil',
        render:Perfil
    },
    {
        name:'NotFount',
        render:Error
    },

];

export default routes