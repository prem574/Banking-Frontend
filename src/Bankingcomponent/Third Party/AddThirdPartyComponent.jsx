import React,{Component} from "react"
import withRouter from "../WithRouter";
import withNavigateHook from "./withNavigateHook";


class AddThirdPartyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : '',
            payeeName: '',
            payeeAccountNumber : '',
            branch : '',
            ifsc :'',
            cifNo : ''
    
        }
    }
    saveAccount=(e)=>{
        e.preventDefault();
        let user = this.state;
        console.log(this.props.params)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            
            body: JSON.stringify({ "user" : {"id" :this.props.params.id}, "payeeName" : this.state.payeeName, "payeeAccountNumber" : this.state.payeeAccountNumber,"branch" : this.state.branch, 
            "ifsc" :this.state.ifsc, "cifNo" :this.state.cifNo,  })
        };
        fetch("http://localhost:8091/payee" ,requestOptions)
              .then((response) => response.json())
              .then((data) => {
                console.log(data) 
                this.props.navigation(`/ThirdParty/${this.props.params.id}`);
              });
             
      }

    onChangeData(type, data) {
            const stateData = this.state;
           stateData[type] = data;
           this.setState({ stateData });
    }
    back() {
        this.props.navigation(`/Accounts/${this.props.params.id}`);
    }

    render()
    {
        console.log(this.state)
        
        return(
            <div className="row" style={{marginLeft:"245px"}}>
                 <div className="col-sm-12" >
                    <div style={{paddingTop:"20px" , marginLeft:"-269px"}}>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.back()}> Back </button>
                    {/* <hr /> */}
                    </div>
                </div>
                <div className="col-sm-8">
                    <h2 className="text-center" style={{paddingTop:"20px"}}>ADD Third Party</h2>
                    <form >
                        {/* <div className="form-group">
                            <label>User *</label>
                            <input type="number" placeholder="user" name="user" className="form-control"  onChange={e => this.onChangeData('user', e.target.value)} />
                        </div> */}

                        <div className="form-group">
                            <label>payeeName *</label>
                            <input type='text' placeholder="payeeName" name="payeeName" className="form-control" onChange={e => this.onChangeData('payeeName', e.target.value)} />
                        </div> 

                        <div className="form-group">
                            <label>payeeAccountNumber *</label>
                            <input type='number' placeholder="payeeAccountNumber" name="payeeAccountNumber" className="form-control"  onChange={e => this.onChangeData('payeeAccountNumber', e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>IFSC *</label>
                            <input type='text' placeholder="ifsc" name="ifsc" className="form-control"  onChange={e => this.onChangeData('ifsc', e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>branch *</label>
                            <input type='text' placeholder="branch" name="branch" className="form-control" onChange={e => this.onChangeData('branch', e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>CIF No *:</label>
                            <input type='number' placeholder="cifNo" name="cifNo" className="form-control"  onChange={e => this.onChangeData('cifNo', e.target.value)} />
                        </div>
                        
                        <button className="btn btn-success" type="button" onClick={this.saveAccount}>Save</button>
                    </form>
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
export  default withRouter(AddThirdPartyComponent);