import React,{Component} from "react"
import withNavigateHook from "./withNavigateHook";

class ListThirdPartyComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data: null,
          loading: true
        };
      }

      transfer =()=> {
        this.props.navigation(`/Accounts/${this.props.params.id}`);
      }
    
    componentDidMount() {
        fetch(`http://localhost:8091/payee`)
          .then(response => response.json())
          .then(data => {
            this.setState({
              data : data,
              loading: false
            });
          });
    }
    render() {
       
        if (this.state.loading) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className="col-lg-12">
                    <div className="table-responsive-lg">
                        <table className="table table-bordered table-sm table-dark table-hover" style={{ textAlign: "center" }}>
                            <thead>
                                <tr>
                                    {/* <th>user</th>  */}
                                    <th>payeeName</th>
                                    <th>payeeAccountNumber</th>
                                    <th>ifsc</th>
                                    <th>branch</th>
                                    <th>cifNo</th>
                                 
                                </tr>
                            </thead>
                            <tbody >
                               
                                    <tr>
                                        {/* <td>{this.state.data.user}</td>  */}
                                        <td>{this.state.data.payeeName}</td>
                                        <td>{this.state.data.payeeAccountNumber}</td>
                                        <td>{this.state.data.ifsc}</td>
                                        <td>{this.state.data.branch}</td>
                                        <td>{this.state.data.cifNo}</td>
                                       
                                        </tr>
                              
                            </tbody>
                        </table>
                        <button className="btn btn-success" type="button" onClick={this.transfer}>Back</button> &nbsp; &nbsp;
                   
                        {/* <hr />
                        <hr />
                        <hr />
                        <hr /> */}
                    </div>
                </div>
            
    );
}
}
   
export default withNavigateHook(ListThirdPartyComponent);


