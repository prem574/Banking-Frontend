
//import { render } from '@testing-library/react';
import React, { Component } from 'react'
//import * as alertify from 'alertifyjs';
import { Button, Card, Container, FormGroup,Form } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import ListAccountComponent from '../Account/ListAccountComponent';
import withNavigateHook from '../Account/withNavigateHook';
import withRouter from '../WithRouter';
  import "../styles/login.css";
class UserLogin extends Component {
constructor(props){
    super(props);
    this.state={
        username:'',
        password:''
    }
}
onChangeData(type, data) {
    const stateData = this.state;
    stateData[type] = data;
    this.setState({ stateData });
  } 

   saveLogin=(e)=>{
    e.preventDefault();
    let user = this.state;
    console.log(this.state.username);
    console.log(this.state.password);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  "username" : this.state.username,
        "password" : this.state.password })
    };
    fetch("http://127.0.0.1:8085/users/login" ,requestOptions)
    .then(data => data.json())
    .then(data => {
       console.log(data);
       localStorage.setItem("token",data.token)
       this.handlesuccesslogin(data.id)

    })
  }
  handlesuccesslogin=(id) => {

this.props.navigation(`/Accounts/${id}`);
//this.props.navigation()
  }


  handleReset=(e)=>{
    e.preventDefault();
    let userreset = this.state;
    userreset({
      username:'',
      password:''
    });
  }
  render()
  {
    let {username,password} = this.state;
    return(
      <div>
          <Container className="container">
            <Card color='secondary' inverse>
              <CardHeader style={{backgroundColor:'lavenderblush'}}>
                <h3>User Login Here !!</h3>
                <br></br>
              </CardHeader>
              <Form style={{backgroundColor: 'lightcyan'}}>
                <FormGroup>
                  <label for ="username" style={{paddingTop:"20px"}}>Enter Username: &nbsp; &nbsp;</label>
                  <input type="text" id='username'  onChange={e => this.onChangeData('username', e.target.value)}></input>
                </FormGroup>
                <br></br>
                <FormGroup>
                  <label for ="password">Enter Password: &nbsp;&nbsp;</label>
                  <input type="password" id='password'  onChange={e => this.onChangeData('password', e.target.value)}></input>
                </FormGroup>
                <br></br>
                <Container className='text-center'>
                  <Button color="dark" onClick={this.saveLogin}>Login</Button> &nbsp;&nbsp;
                  <Button className='ms-2' color='secondary' onClick={this.handleReset}>Reset</Button>
                </Container>
                <div>
                  <h5 style={{paddingTop:"20px"}}>Don't have any Account? <a href="/user-registration">Register Here!!</a></h5>
                </div>
              </Form>
            </Card>
          </Container>
        </div>
    );
  }
  }
  export default withNavigateHook(UserLogin)
  
