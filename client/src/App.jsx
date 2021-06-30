
import { useEffect } from "react";
import { getAddress, getAllBanner, isUserLoggedIn, updateCart } from "./actions";
import { useDispatch, useSelector } from 'react-redux'


import Container from "./components/layout/container/Container"
import Routes from "./routes/Routes"
import { getInitialData } from "./actions/initialData.actions";
import axios from "axios";

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {

    dispatch(getInitialData())
    // axios.get('https://freegeoip.app/json/')
    //   .then(res => {
    //     console.log(res)
    //   }).catch(err=>{
    //     console.log(err)
    //   })

    dispatch(getAllBanner())
  }, [])
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())

    }

    dispatch(getAddress())

    dispatch(updateCart())

  }, [auth.authenticate])

  return (
    <Container>
      <Routes />
    </Container>
  );
}

export default App;