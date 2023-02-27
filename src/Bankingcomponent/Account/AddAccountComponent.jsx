import React,{Component} from "react"
import withNavigateHook from "./withNavigateHook";
// import AccountService from "./AccountService";

class AddAccountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : '',
            type : '',
            branch : '',
            ifsc :'',
            balance : '',
            dateCreated : '',
            lastUpdated : ''
        }
    }

    // controlQuickly() {
    //     return this.state.user === null || this.state.user === '' || this.state.user === ' ' ||
    //         this.state.branch === null || this.state.branch=== '' || this.state.branch === ' ';
    // }
    // saveUser = (e) => {
    //     if (!this.controlQuickly()) {
    //         e.preventDefault();
    //         let account = this.state;
    //         PatientService.createPatient(patient)
    //             .then(res => {
    //                 this.setState({ message: 'User added successfully.' });
    //                 this.props.navigation('/patients');
    //                 alertify.success("Adding patient is ok");
    //             }).catch((error) => {
    //                 console.log(error.response)
    //                 if (error.response) {
    //                     this.setState({ errorMessage: error.response.data.message, patientid: null });
    //                     AlertifyService.alert(error.response.data.message);
    //                     //this.props.history.push('/patients');
    //                 }
    //                 else if (error.request) console.log(error.request);
    //                 else console.log(error.message);
    //             });
    //     } else
    //         AlertifyService.alert(' * All fields are mandatory');
    // }
    // 
    // back() {
    //     this.props.navigation('/patients');
    // }

    saveAccount=(e)=>{
        e.preventDefault();
        let user = this.state;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "user" : {"id" :this.state.user}, "type" : this.state.type, "branch" : this.state.branch, 
            "ifsc" :this.state.ifsc,"balance" :this.state.balance  })
        };
        fetch("http://127.0.0.1:8088/accounts" ,requestOptions)
              .then((response) => response.json())
              .then((data) => console.log(data));
      }

    onChangeData(type, data) {
            const stateData = this.state;
           stateData[type] = data;
           this.setState({ stateData });
    }

    render()
    {
        // let {user,type,branch,ifsc,balance,dateCreated,lastUpdated} = this.state;
        return(
            <div className="row">
                 <div className="col-sm-12">
                    <button
                        className="btn btn-danger"
                        onClick={() => this.back()}> Back </button>
                    <hr />
                </div>
                <div className="col-sm-8">
                    <h2 className="text-center">ADD Account</h2>
                    <form>
                        <div className="form-group">
                            <label>User *</label>
                            <input type="number" placeholder="user" name="user" className="form-control"  onChange={e => this.onChangeData('user', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>branch *</label>
                            <input type='text' placeholder="branch" name="branch" className="form-control" onChange={e => this.onChangeData('branch', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>type *</label>
                            <select className='form-control'  onChange={e => this.onChangeData('type', e.target.value)}>
                              <option>Saving</option>
                              <option>Withdrawal</option>
                              <option>Other*</option>
                            </select>

                        </div>
                        <div className="form-group">
                            <label>IFSC *</label>
                            <input type='number' placeholder="ifsc" name="ifsc" className="form-control"  onChange={e => this.onChangeData('ifsc', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Balance *:</label>
                            <input type='number' placeholder="balance" name="balance" className="form-control"  onChange={e => this.onChangeData('balance', e.target.value)} />
                        </div>
                        
                        <button className="btn btn-success" type="button" onClick={this.saveAccount}>Save</button>
                    </form>
                </div>
                
                <div className="col-sm-12">
                    <hr />
                    <hr />
                    <hr />
                </div>
            </div>
        );
    }
        
}

export default withNavigateHook(AddAccountComponent);