import React, { Component } from 'react';
import withRouter from '../WithRouter';
import withNavigateHook from './withNavigateHook';

class ViewThirdPartyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      formData: {
        id: '',
        payeeName: '',
        payeeAccountNumber: '',
        ifsc: '',
        branch: '',
        cifNo: ''

      },
      isEditing: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  transfer =()=> {
    this.props.navigation(`/Accounts/${this.props.params.id}`);
  }

  // Fetch data from the API
  getData = () => {
    console.log(this.props.params);
    fetch(`http://localhost:8091/payee/users/${this.props.params.id}/payee`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ data });
      });
  };

  // Handle form input changes
  handleInputChange = (name, value) => {
    // const target = event.target;
    // const name = target.name;
    // const value = target.value;
    console.log(name);
    console.log(value);
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,

        [name]: value
      }
    }));
  };

  // // Handle add form submission
  // handleAddSubmit = event => {
  //   event.preventDefault();
  //   // const { payeeName, payeeAccountNumber, ifsc, branch, cifNo } = this.state.formData;

  //   fetch('http://localhost:8091/payee', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       "user": { "id": this.state.user }, "payeeName": this.state.payeeName, "payeeAccountNumber": this.state.payeeAccountNumber, "branch": this.state.branch,
  //       "ifsc": this.state.ifsc, "cifNo": this.state.cifNo,
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       this.getData();
  //       this.setState({
  //         formData: {
  //           id: '',
  //           payeeName: '',
  //           payeeAccountNumber: '',
  //           ifsc: '',
  //           branch: '',
  //           cifNo: ''

  //         }
  //       });
  //     });
  // };

  // Handle edit form submission
  handleEditSubmit = event => {
    event.preventDefault();
    // const { id, payeeName, payeeAccountNumber, ifsc, branch, cifNo } = this.state.formData;
    console.log(this.state);
    fetch(`http://localhost:8091/payee/${this.state.formData.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "user": { "id": parseInt(this.props.params.id) }, "payeeName": this.state.formData.payeeName, "payeeAccountNumber": this.state.formData.payeeAccountNumber, "branch": this.state.formData.branch,
        "ifsc": this.state.formData.ifsc, "cifNo": this.state.formData.cifNo,
      })
    })
      .then(response => response.json())
      .then(data => {
        this.getData();
        this.setState({
          formData: {
            id: '',
            payeeName: '',
            payeeAccountNumber: '',
            ifsc: '',
            branch: '',
            cifNo: ''
          },
          isEditing: false
        });
      });
  };

  // Handle delete
  handleDelete = id => {
    fetch(`http://localhost:8091/payee/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        this.getData();
      });
  };

  // Set form data for editing
  setEditData = data => {
    this.setState({
      formData: {
        id: data.id,
        payeeName: data.payeeName,
        payeeAccountNumber: data.payeeAccountNumber,
        ifsc: data.ifsc,
        branch: data.branch,
        cifNo: data.cifNo

      },
      isEditing: true
    });
  };

  // updateAccount(){

  // }

  render() {
    return (
      <div className="col-lg-12" style={{paddingTop : "21px",
        backgroundColor: "peachpuff"}}>
        <div className="table-responsive-lg">
          <table className="table table-bordered table-sm table-dark table-hover" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              {/* <th>ID</th>&nbsp; &nbsp; */}
              <th>PayeeName</th>
              <th>payeeAccountNumber</th>
              <th> ifsc</th>
              <th> branch</th>
              <th> cifNo </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(data => (
              <tr key={data.id}>
                {/* <td>{data.id}</td>&nbsp; &nbsp; */}
                <td>{data.payeeName}</td>
                <td>{data.payeeAccountNumber}</td>
                <td>{data.ifsc}</td>
                <td>{data.branch}</td>
                <td>{data.cifNo}</td>
                <td>
                  <button onClick={() => this.setEditData(data)}>Edit</button>&nbsp; &nbsp;
                  <button onClick={() => this.handleDelete(data.id)}>Delete</button>

                </td>
              </tr>

            ))}
          </tbody>
          </table>
          <button className="btn btn-success" type="button" onClick={this.transfer}>Back</button> &nbsp; &nbsp;
          <h2>{this.state.isEditing && 'Edit Data'}</h2>
          {
            this.state.isEditing &&
            (
              <form>
                {/* <div className="form-group">
                            <label>User *</label>
                            <input type="number" placeholder="user" name="user" className="form-control"  onChange={e => this.onChangeData('user', e.target.value)} />
                        </div> */}

                <div className="form-group">
                  <label>payeeName *</label>
                  <input type='text' defaultValue={this.state.formData.payeeName} placeholder="payeeName" name="payeeName" className="form-control" onChange={e => this.handleInputChange('payeeName', e.target.value)} />
                </div>

                <div className="form-group">
                  <label>payeeAccountNumber *</label>
                  <input type='number' defaultValue={this.state.formData.payeeAccountNumber} placeholder="payeeAccountNumber" name="payeeAccountNumber" className="form-control" onChange={e => this.handleInputChange('payeeAccountNumber', e.target.value)} />
                </div>

                <div className="form-group">
                  <label>IFSC *</label>
                  <input type='text' defaultValue={this.state.formData.ifsc} placeholder="ifsc" name="ifsc" className="form-control" onChange={e => this.handleInputChange('ifsc', e.target.value)} />
                </div>

                <div className="form-group">
                  <label>branch *</label>
                  <input type='text' defaultValue={this.state.formData.branch} placeholder="branch" name="branch" className="form-control" onChange={e => this.handleInputChange('branch', e.target.value)} />
                </div>

                <div className="form-group">
                  <label>CIF No *:</label>
                  <input type='number' defaultValue={this.state.formData.cifNo} placeholder="cifNo" name="cifNo" className="form-control" onChange={e => this.handleInputChange('cifNo', e.target.value)} />
                </div>

                <button className="btn btn-success" type="button" onClick={this.handleEditSubmit}>Save</button>
              </form>

            )
          }
          
        </div>

      </div>

    )
  };
}

export default withRouter(ViewThirdPartyComponent);

