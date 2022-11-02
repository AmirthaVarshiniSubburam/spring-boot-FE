import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, FloatingLabel, Form, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
      
   
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
    const navigate = useNavigate()
    
     

  //   const RouteToHomePage = () => {
  //     navigate('/')
  // }

  const RouteToSignPage = () => {
      navigate('/signup')
  }

  const LoginCheck = (event) => {
      event.preventDefault();

      axios.post(`http://localhost:8080/login`, { email, password  })
           .then(res => console.log(res))
           .catch(err => console.log(err))
  
  }

  return (
    <div className='container-fluid p-5'>
        
        <Navbar bg="warning" className='ms-25' p-4>
        <Container>
          <Navbar.Brand>Welcome to our Registration page</Navbar.Brand>
        </Container>
      </Navbar>
    <br />

        <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3">
        <Form.Control type="email" placeholder="Email" required onChange={(e) => setEmail (e.target.value)}  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword (e.target.value)}  />
      </FloatingLabel>
      
      <div className="col-md-12 text-center p-5">
            <button type="button" className="btn btn-primary m-3" onClick={LoginCheck}>Login</button>
            <button type="button" className="btn btn-warning" onClick={RouteToSignPage} >Register</button>
        </div>

     </div>
  )
}

export default Login