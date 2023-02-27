import React, { Component } from "react";
import { Container, Card, FormGroup, Form, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import withNavigateHook from "../Account/withNavigateHook";
import AlertifyService from "../Account/AlertifyService";
class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      phoneNumber: "",
      email: "",
      password: "",
      address: "",
      type : "Saving"
    };
  }
  onChangeData(type, data) {
    const stateData = this.state;
    stateData[type] = data;
    this.setState({ stateData });
    console.log(stateData)
  }

  saveLogin = (e) => {
    e.preventDefault();
    let user = this.state;
    console.log(this.state)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        password: this.state.password,
        address: this.state.address,
        
      }),
    };
    fetch("http://127.0.0.1:8085/users/register", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.id);
        const AccountrequestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "user" : {"id" :data.id}, "type" : this.state.type, "branch" : "MACHILIPATNAM", 
          "ifsc" :"HDFC0001632","balance" :50000  })
      };
      fetch("http://127.0.0.1:8088/accounts" ,AccountrequestOptions)
              .then((response) => response.json())
              .then((data) => console.log(data));
              AlertifyService.successMessage("registered successfull");


      }
        );
        this.props.navigation(`/user-login`);
  };

  handleReset = (e) => {
    e.preventDefault();
    let userreset = this.state;
    userreset({
      firstName: "",
      lastName: "",
      username: "",
      phoneNumber: "",
      email: "",
      password: "",
      type: "",
      address: "",
    });

    
  };
  render() {
    //   let {firstname,lastname , username,phoneNumber,email,password,address} = this.state;
    return (
      <div>
        <Container>
          <Card color="dark" style={{backgroundColor:'lavenderblush'}}>
            <CardHeader>
              <h3>To fill information to User Register</h3>
              <br></br>
            </CardHeader>
            <Form style={{backgroundColor: 'lightcyan'}}>
              <FormGroup>
                <label for="name" style={{paddingTop:"20px"}}>Enter First Name: &nbsp;&nbsp;</label>
                <input
                  type="text"
                  placeholder="firstname"
                  id="firstName"
                  onChange={(e) =>
                    this.onChangeData("firstName", e.target.value)
                  }
                ></input>
              </FormGroup>
              <br></br>
              <FormGroup>
                <label for="name">Enter Last Name: &nbsp;&nbsp;</label>
                <input
                  type="text"
                  placeholder=" Lastname"
                  id="lname"
                  onChange={(e) =>
                    this.onChangeData("lastName", e.target.value)
                  }
                ></input>
              </FormGroup>
              <br></br>
              <FormGroup>
                <label for="name">Enter User Name: &nbsp;&nbsp;</label>
                <input
                  type="text"
                  placeholder=" user name"
                  id="uname"
                  onChange={(e) =>
                    this.onChangeData("username", e.target.value)
                  }
                ></input>
              </FormGroup>
              <br></br>
              <FormGroup>
                <label for="phone-number">
                  Enter phoneNumber: &nbsp;&nbsp;
                </label>
                <input
                  type="text"
                  placeholder=" Phone Number"
                  id="pname"
                  onChange={(e) =>
                    this.onChangeData("phoneNumber", e.target.value)
                  }
                ></input>
              </FormGroup>
              <br></br>
              <FormGroup>
                <label for="email">Enter Email: &nbsp;&nbsp;</label>
                <input
                  type="email"
                  placeholder=" email"
                  id="email"
                  onChange={(e) => this.onChangeData("email", e.target.value)}
                ></input>
              </FormGroup>
              <br></br>
              <FormGroup>
                <label for="address">Enter Address: &nbsp;&nbsp;</label>
                <input
                  type="address"
                  placeholder=" Address"
                  id="address"
                  onChange={(e) => this.onChangeData("address", e.target.value)}
                ></input>
              </FormGroup>
              <br></br>
              <FormGroup>
                <label>AccountType * &nbsp;&nbsp;</label>
                <select
                 
                  onChange={(e) => this.onChangeData("type", e.target.value)}
                >
                  <option>Saving</option>
                  <option>Salary Account</option>
                  <option>Other*</option>
                </select>
              </FormGroup>
              <br></br>

              <FormGroup>
                <label for="password">Enter Password: &nbsp;&nbsp;</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  id="password"
                  onChange={(e) =>
                    this.onChangeData("password", e.target.value)
                  }
                ></input>
              </FormGroup>
              <Container className="text-center">
                <Button color="dark" onClick={this.saveLogin}>
                  Registration
                </Button>{" "}
                &nbsp;&nbsp;
                <Button
                  className="ms-2"
                  color="secondary"
                  onClick={this.handleReset}
                >
                  Reset
                </Button>
              </Container>
              <div>
                <h5 style={{paddingTop:"20px"}}>
                  Already have An Account?{" "}
                  <a href="/user-login">Login Here !!</a>
                </h5>
              </div>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}
export default withNavigateHook(UserRegistration);
