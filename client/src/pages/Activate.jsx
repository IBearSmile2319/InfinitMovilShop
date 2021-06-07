import Header from "../components/layout/Header/Header"
import Sessions from "../components/navbar/Sessions"
import MainContent from "../components/layout/content/MainContent"
import Card from "../components/Card"
import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken'
import Separator from "../components/Separator";
import axios from 'axios'
import { toast } from 'react-toastify'
import Footer from '../components/Footer/Footer'
const Activate = ({ match }) => {
  const [formData, setFormData] = useState({
    token: "",
    username: "",
    lastName: "",
    firstName: ""
  });

  useEffect(() => {
    let token = match.params.token;
    const { username, firstName, lastName } = jwt.decode(token);

    if (token) {
      setFormData({ ...formData, token, firstName, lastName, username });
    }
  }, [match.params]);
  const { username, firstName, lastName, token } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    try {
      axios.post(`${process.env.REACT_APP_API_URL}activate`, {
        token
      })
        .then(res => {
          setFormData({
            ...formData,
          });
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        })
        .catch(err => {
          toast.error(err.response.data.errors, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        });
    } catch (e) {

    }
  };

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
<Footer/>
    </>
  )
}

export default Activate
