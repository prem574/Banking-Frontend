import { Component } from "react";
import withRouter from "../WithRouter";
import { Container, Card, FormGroup, Form, Button } from "react-bootstrap";

class NewTransactionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toacc: ["select payee account"],
            fromacc :[],
            accountsmap : {},
            tptmap : {},
            Transactiontype: ""
           

        }
    }

    componentDidMount() {
        fetch(`http://localhost:8088/users/${this.props.params.id}/accounts`)
            // .then(response => response.json())
            // .then((data)=>console.log(data))
            .then(data => data.json())
            .then(data => {
                console.log(data);
                let accountLists = [];
                data.forEach(element => {
                    accountLists.push(element.id);
                });
                console.log(accountLists);
                this.setState(
                    {
                        fromacc: accountLists
                    }
                );
            });

        // console.log(this.data);
    }

    onChangeData(type, data) {
        const stateData = this.state;
        stateData[type] = data;
        this.setState({ stateData });
    }
    onTypeChange(value) {
        this.setState({
            Transactiontype: value,
            toacc: ["select payee account"]
            
        })

        if (value === "STL Bank") {
            fetch(`http://localhost:8088/accounts`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let accountIdLists = [];
                let accountmap ={}
                data.forEach(element => {
                    if (value != element.id) {
                        accountIdLists.push(element.user.firstName);
                        accountmap[element.user.firstName] = element.id;
                    }
                });
                console.log(accountIdLists);
                this.setState({
                    toacc: accountIdLists,
                    accountsmap : accountmap

                })

            })
        }
        else if(value === "Other Banks"){
            fetch(`http://localhost:8091/payee/users/${this.props.params.id}/payee`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let accountLists = [];
                    let accountmap = {};
                    data.forEach(element => {
                        accountLists.push(element.payeeName);
                        accountmap[element.payeeName] = element.id;
                    });
                    console.log(accountLists);
                    this.setState(
                        {
                            toacc: accountLists,
                            tptmap:accountmap
                        }
                    );
                });
        }
    }
    getfromAccounts() {
        let temp = [];
        console.log(this.state);
        
        this.state.fromacc.forEach(element => {
            temp.push(
                <option>{element}</option>
            )

        });
        return temp;


    }
    onChangefromAccount(value) {
        if (this.state.Transactiontype === "STL Bank") {
            fetch(`http://localhost:8088/accounts`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let accountIdLists = [];
                    let accountmap ={}
                    data.forEach(element => {
                        if (value != element.id) {
                            accountIdLists.push(element.user.firstName);
                            accountmap[element.user.firstName] = element.user.id;
                        }
                    });
                    console.log(accountIdLists);
                    this.setState({
                        toacc: accountIdLists,
                        accountsmap : accountmap

                    })

                })
        }
    }

    gettoAccounts(){
        let temp = [];
        console.log(this.state);
        temp.push(
            <option>"select payee account"</option>
        )
        this.state.toacc.forEach(element => {
            temp.push(
                <option>{element}</option>
            )});
            return temp;
    }

    saveTransfer =(e) =>{
        e.preventDefault();
        let user = this.state;
        console.log( this.state)
      let jsondata =  { "user" : {"id" :this.props.params.id}, "fromAccount" :{"id" : this.state.fromacc[0]}, "amount" : this.state.amount,"description" : this.state.description
             };
             if(this.state.Transactiontype === "STL Bank"){
                console.log(this.state.accountsmap[this.state.selectedacc])
                jsondata["enternalAccount" ] = {"id" :this.state.accountsmap[this.state.selectedacc]}

             }
             else if(this.state.Transactiontype === "Other Banks"){
                jsondata["tptAccount"] = {"id" :this.state.tptmap[this.state.selectedacc]}
             }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            
            body: JSON.stringify(jsondata)
        };
        fetch("http://localhost:8082/transactions/transfer" ,requestOptions)
              .then((response) => response.json())
              .then((data) => {
                console.log(data) 
                this.props.navigation(`/transaction/${this.props.params.id}`);
              });
        
    }

    render() {

        return (
            <div className="row">
                <div className="col-sm-12" style={{paddingTop:"20px"}}>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.back()}> Back </button>
                    <hr />
                </div>
                <div className="col-sm-8">
                    <h2 className="text-center">New Transaction</h2>
                    <div className="form-group">
                    <form>
                        <FormGroup>
                            <label>Type * &nbsp;&nbsp;</label>
                            <select

                                onChange={(e) => this.onTypeChange(e.target.value)}
                            >
                                <option>Select bank</option>

                                <option>STL Bank</option>
                                <option>Other Banks</option>
                            </select>
                        </FormGroup>
                        <br></br>

                        <FormGroup>


                            <label>From Account Id * &nbsp;&nbsp;</label>
                            <select disabled
                                onChange={(e) => this.onChangefromAccount(e.target.value)}
                            >
                                {
                                    this.getfromAccounts()
                                }
                            </select>

                        </FormGroup>
                        <br></br>
                        <FormGroup>
                            <label>Payee Name * &nbsp;&nbsp;</label>
                            <select

                              onChange={(e) => this.onChangeData("selectedacc", e.target.value)}
                            >
                                {
                                    this.gettoAccounts()
                                }
                                

                            </select>
                        </FormGroup>
                        <br></br>
                        <FormGroup>
                            <label for="amount">Enter Amount: &nbsp;&nbsp;</label>
                            <input
                                type="number"
                                placeholder="Amount"
                                id="amount"
                                onChange={(e) =>
                                    this.onChangeData("amount", e.target.value)
                                }
                            ></input>

                        </FormGroup>
                        <br></br>

                        <FormGroup>
                            <label for="description">Enter description: &nbsp;&nbsp;</label>
                            <input
                                type="text"
                                placeholder="description"
                                id="description"
                                onChange={(e) =>
                                    this.onChangeData("description", e.target.value)
                                }
                            ></input>

                        </FormGroup>
                       
                        <br></br>

                        <button className="btn btn-success" type="button" onClick={this.saveTransfer}>Save</button>
                    </form>
                </div>
                </div>
                <div className="col-sm-12">
                    {/* <hr />
                    <hr />
                    <hr /> */}
                </div>
            </div>
        );
    }

}
export default withRouter(NewTransactionComponent);