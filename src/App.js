import React from 'react'
import { useState ,useEffect} from "react";
import './App.css';
import { Button, Form, FormGroup, Label, Input,Container } from 'reactstrap';

function App(){

  const initialValues = {username:" " ,email:" ",password:" "}
  const [formValues,setFormValues]=useState(initialValues)
  const [formErrors,setformErrors]=useState({})
  const [isSubmit,setisSubmit]=useState(false)

  const handleChange = (e) =>{
    const {name , value} = e.target
    setFormValues({...formValues , [name]: value })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setformErrors(validate(formValues))
    setisSubmit(true)
  }
  
  useEffect(() => {

    if (Object.keys(formErrors).length ===0 && isSubmit){
  
    }
  },[formErrors])

  
  const validate = (values) => {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username){
      errors.username = "Username is required"
    }

    if (!values.email){
      errors.email = "Email is required"
    }else if (!regex.test(values.email)){
      errors.email = "This is not a valid email format"
    }

    if (!values.password){
      errors.password = "Password is required"
    }else if (values.password.length < 4){
      errors.password = "Password must be more than 4 characters"
    }else if (values.password.length > 10){
      errors.password = "Password cannot exceed more than 10 characters"
    }


    return errors
  }



  return (

    <Container>
      
      {Object.keys(formErrors).length === 0 && isSubmit && 
        (<div className="ui-message">signed in successfully</div> )
      }


      <Form onSubmit={handleSubmit}>

        <FormGroup>
          <Label for="exampleName">Username</Label>
          <Input type="text" 
                 name="username" 
                 id="exampleName" 
                 placeholder="Username"
                 value={formValues.username}
                 onChange={handleChange}          
          />
          <p>{formErrors.username}</p>
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input  type="email" 
                  name="email" 
                  id="exampleEmail" 
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}                  
          />
          <p>{formErrors.email}</p>
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" 
                 name="password" 
                 id="examplePassword"               
                 placeholder="password placeholder"                
                 value={formValues.password}
                onChange={handleChange}
          />
          <p>{formErrors.password}</p>
        </FormGroup>

        <Button className="btn">submit</Button>

      </Form>

      
    </Container>

    );
}
export default App;

/*
    <div className="container">
      
      {Object.keys(formErrors).length === 0 && isSubmit && 
        (<div className="ui message success">signed in successfully</div> )
      }

      <form onSubmit={handleSubmit}>

        <h1>Registration Form</h1>
        <div className="ui divider"></div>

        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>

          <button className="fluid ui button blue">Submit</button>
        
        </div>
      </form>
      </div>*/

