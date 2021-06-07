
import { useEffect } from "react";
import { isUserLoggedIn } from "./actions";
import { useDispatch, useSelector } from 'react-redux'


import Container from "./components/layout/container/Container"
import Routes from "./routes/Routes"
function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }
  }, [auth,dispatch])
  return (
    <Container>
      <Routes />
    </Container>
  );
}

export default App;