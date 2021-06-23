import Header from "../components/layout/Header/Header"
import Sessions from "../components/navbar/Sessions"
import MainContent from "../components/layout/content/MainContent"
import Card from "../components/Card"
import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken'
import Separator from "../components/Separator";
import Footer from '../components/Footer/Footer'
import { useDispatch, useSelector } from "react-redux";
import { activate } from "../actions";
import { Redirect } from "react-router-dom";

const Activate = ({ match }) => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [token, setToken] = useState('')

  useEffect(() => {
    let token = match.params.token

    if (token) {
      try {
        const { username, firstName, lastName } = jwt.decode(token)
        setUsername(username)
        setFirstName(firstName)
        setLastName(lastName)
        setToken(token)
      } catch (error) {
        
      }

    }
  }, [match.params])


  const handleSubmit = e => {
    e.preventDefault()
    dispatch(activate(token))
  }

  if (auth.authenticate) {
    return <Redirect to="/" />
  }

  return (
    <>
      <Header>
        <Sessions />
      </Header>
      <MainContent>
        <Card>
          <div className="activate_content">
            <h2>Bienvenido <span>{username}</span></h2>
            <p>{firstName} {lastName}</p>
            <Separator />
            <div className="btn btn_activate" onClick={handleSubmit}>Activar cuenta</div>
          </div>
        </Card>
      </MainContent>
      <Footer />
    </>
  )
}

export default Activate
