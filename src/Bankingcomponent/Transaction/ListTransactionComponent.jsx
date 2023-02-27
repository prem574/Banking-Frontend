
import React, { Component } from "react"
import withRouter from "../WithRouter";
import { CSVLink } from 'react-csv';

class ListTransactionComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        downloadData :[],
        loading: true
      };
    }
    

    componentDidMount() {
       // console.log(this.props.params)
        fetch(`http://localhost:8082/transactions/users/${this.props.params.id}/transactions`)
          // .then(response => response.json())
          // .then((data)=>console.log(data))
          .then(data => data.json())
          .then(data => {
            console.log(data);

            this.setState({
              data: data,
              loading: false
            });
            let tempData = []

            data.forEach(
              obj=>{
                tempData.push(
                  {
                    Date : obj.date,
                    Description : obj.description,
                    Amount : obj.amount,
                    SourceAccount : obj.fromAccount.id,
                    TptAccount : obj.tptAccount?obj.tptAccount.payeeName :"-",
                    InternalAccount : obj.enternalAccount ? obj.enternalAccount.user.firstName:"-",
                    OldBalance : obj.oldBalance,
                    NewBalance : obj.newBalance
                  }
                )
              }
            )
            this.setState({
              downloadData : tempData
            })
          });
        // console.log(this.data);
      }

      getrows(){
        let list = []
        console.log(this.state.data);
        this.state.data.forEach(
          obj => { 
            list.push(
            <tr>
              <td>{obj.date}</td>
              <td>{obj.description}</td>
              <td>{obj.amount}</td>
              <td>{obj.fromAccount.id}</td>
              <td>{obj.tptAccount?obj.tptAccount.payeeName :"-"}</td>
              <td>{obj.enternalAccount ? obj.enternalAccount.user.firstName:"-"}</td>
              {/* <td>{obj.transactionStatus}</td> */}
              {/* <td>{obj.businessTransactionNumber}</td> */}
              <td>{obj.oldBalance}</td>
              <td>{obj.newBalance}</td>
            </tr>
            )
        
          }
        )
        //console.log(list);
        return list;
        
          }
          back() {
            this.props.navigation(`/Accounts/${this.props.params.id}`);
        }
    

          render() {

            if (this.state.loading) return <div>
              <h1> Pleses wait some time.... </h1> </div>;
           // console.log(this.state.data);
            return (
              
              <div className="col-lg-12" style={{paddingTop: "19px",
                backgroundColor: "beige"}}>
                <div className="table-responsive-lg">
                  <table className="table table-bordered table-sm table-dark table-hover" style={{ textAlign: "center" }}>
                    <thead>
                      <tr>
                        {/* <th>user</th>  */}
                        
                        <th>date</th>
                        <th>description</th>
                        <th>amount</th>
                        <th>fromAccount</th>
                        <th>tptAccount</th>
                        <th>enternalAccount</th>
                        {/* <th>transactionStatus</th>
                        <th>businessTransactionNumber</th> */}
                        <th>oldBalance</th>
                        <th>newBalance</th>
                      </tr>
                    </thead>
                    <tbody >
        
        
                      {/* <td>{this.state.data.user}</td>  */}
                      {
                        this.getrows()
                      }
        
        
                    </tbody>
                  </table>
                  <CSVLink data={this.state.downloadData} filename="Transaction.csv">
                  <button className="btn btn-success" type="button" >Download</button>
                  </CSVLink> 
                  <button
                        className="btn btn-danger"
                        onClick={() => this.back()} style={{marginLeft:"26px"}}> Back </button>
                  {/* <button className="btn btn-success" type="button" onClick={this.viewthirdparty}>view Third Party</button>  */}
                  {/* <hr />
                  <hr />
                  <hr />
                  <hr /> */}
                </div>
                
              </div>
        
            );
          }
        }
        
        export default withRouter(ListTransactionComponent);
    
