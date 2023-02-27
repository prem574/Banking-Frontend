
import React, { Component } from "react"
import withRouter from "../WithRouter";
// import withNavigateHook from "./withNavigateHook";


class ListAccountComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    };
  }
  listTransaction=()=>{
    this.props.navigation(`/transaction/${this.props.params.id}`);
  }
  transfer =()=> {
    this.props.navigation(`/transfer/${this.props.params.id}`);
  }
  saveAccount=()=>{
    
          this.props.navigation(`/add-ThirdParty/${this.props.params.id}`);
  }
  viewthirdparty = ()=>{
    this.props.navigation(`/ThirdParty/${this.props.params.id}`);
  }


  componentDidMount() {
    fetch(`http://localhost:8088/users/${this.props.params.id}/accounts`)
      // .then(response => response.json())
      // .then((data)=>console.log(data))
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          data: data,
          loading: false
        });
      });
    // console.log(this.data);
  }

  getrows(){
let list = []
this.state.data.forEach(
  obj => { 
    list.push(
    <tr>
      <td>{obj.type}</td>
      <td>{obj.branch}</td>
      <td>{obj.ifsc}</td>
      <td>{obj.balance}</td>
      <td>{obj.dateCreated}</td>
      <td>{obj.lastUpdated}</td>
    </tr>
    )

  }
)
console.log(list);
return list;

  }

  render() {

    if (this.state.loading) return <div>
      <h1> Pleses wait some time.... </h1> </div>;
    console.log(this.state.data.type);
    return (
      <div className="col-lg-12" style={{backgroundColor:"lavender",paddingTop:"20px"}}>
        <div className="table-responsive-lg">
          <table className="table table-bordered table-sm table-dark table-hover" style={{ textAlign: "center" }}>
            <thead>
              <tr>
                {/* <th>user</th>  */}
                
                <th>type</th>
                <th>branch</th>
                <th>ifsc</th>
                <th>balance</th>
                <th>dateCreated</th>
                <th>lastUpdated</th>
              </tr>
            </thead>
            <tbody >


              {/* <td>{this.state.data.user}</td>  */}
              {
                this.getrows()
              }


            </tbody>
          </table>
          <div style={{paddingTop:"20px"}}>
          <button className="btn btn-success" type="button" onClick={this.saveAccount}>Add Third Party</button> &nbsp; &nbsp;
          <button className="btn btn-success" type="button" onClick={this.viewthirdparty}>view Third Party</button> &nbsp; &nbsp;
          <button className="btn btn-success" type="button" onClick={this.listTransaction}>Transaction List</button> &nbsp; &nbsp;
          <button className="btn btn-success" type="button" onClick={this.transfer}>Transfer</button> &nbsp; &nbsp;
          {/* <hr />
          <hr />
          <hr />
          <hr /> */}
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(ListAccountComponent);

