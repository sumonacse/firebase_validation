import { useState, useEffect } from 'react';
import {Button, Form, Container} from 'react-bootstrap';



function App() {

  let [firstname,setFirstname] = useState("");
  let [lastname,setLastname] = useState("");
  let [username,setUsername] = useState("");
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");

  let [firstnameerr,setFirstnameerr] = useState("");
  let [lastnameerr,setLastnameerr] = useState("");
  let [usernameerr,setUsernameerr] = useState("");
  let [emailerr,setEmailerr] = useState("");
  let [passworderr,setPassworderr] = useState("");



  let handleForm = (e)=>{

    e.preventDefault();

    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


    if(!firstname){
      setFirstnameerr("Firstname is required");
    }
    if(!lastname){
      setLastnameerr("lastname is required");
    }
    if(!username){
      setUsernameerr("username is required");
    }
    if(!email){
      setEmailerr("email is required");
    }
    if(!password){
      setPassworderr("password is required");
    } else if(!password.match(regularExpression)){
      setPassworderr("Give a strong password combination which contain Uppercase Lowercase number and symbol.ALso between 6 to 16 character");
    }

   
    // if(password.length !="" && password.length<6){
    //   setPassworderr("password must be greater than or equal to 6 character");
    // }

   

  }; 




  let handleFirstName = (e)=>{
    setFirstname(e.target.value);
    setFirstnameerr("");
  };
  let handleLastName = (e)=>{
    setLastname(e.target.value);
    setLastnameerr("");
  };
  let handleUserName = (e)=>{
    setUsername(e.target.value);
    setUsernameerr("");
  };
  let handleEmail = (e)=>{
    setEmail(e.target.value);
    setEmailerr("");
  };
  let handlePassword = (e)=>{
    setPassword(e.target.value);
    setPassworderr("");
  };




  return (
    <Container>
        <Form>
          <h1>Form Validation</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control onChange={handleFirstName} type="text" placeholder="first name" style={firstnameerr ? errborder : border } />

              {firstnameerr && (
              <Form.Text className="text-danger"> {firstnameerr} </Form.Text>
              )}
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control onChange={handleLastName} type="text" placeholder="Last name" style={lastnameerr ? errborder : border } />
              {lastnameerr && (
              <Form.Text className="text-danger"> {lastnameerr} </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control onChange={handleUserName} type="text" placeholder="username" style={usernameerr ? errborder : border } />
              {usernameerr && (
              <Form.Text className="text-danger"> {usernameerr} </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" style={emailerr ? errborder : border }/>
              {emailerr && (
              <Form.Text className="text-danger"> {emailerr} </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={handlePassword} type="password" placeholder="Password" style={passworderr ? errborder : border } />
              {passworderr && (
              <Form.Text className="text-danger"> {passworderr} </Form.Text>
              )}
            </Form.Group>
           
            <Button onClick={handleForm} variant="primary" type="submit"> Submit </Button>
        </Form>
    </Container>
  );
}


let errborder = {
  border:"1px solid red",
};
let border = {
  border:"1px solid cadetblue",
};


export default App;



