import React,{Component} from "react"

class AccountDetailModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.account.id,
            user: props.account.user,
            type: props.account.type,
            branch: props.accountc.branch,
            ifsc: props.account.ifsc,
            balance: props.account.balance,
            dateCreated: props.account.dateCreated,
            lastUpdated: props.account.lastUpdated
        }; 
    }
    render()
    {
        return(
            <div className="modal fade" id="accountModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Account Detail</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="card" >
                                    <div className="card-header"> <h3>{this.props.account.type}</h3>  <h3>{this.props.account.branch}</h3></div>
                                    <ul className="text-left list-group list-group-flush">
                                        <li className="list-group-item"><b>Id : </b>{this.props.account.id}</li>
                                        <li className="list-group-item"><b>Type : </b>{this.props.account.type}</li>
                                        <li className="list-group-item"><b> Branch : </b>{this.props.account.branch}</li>
                                        <li className="list-group-item"><b> Ifsc : </b>{this.props.account. ifsc}</li>
                                        <li className="list-group-item"><b> Balance : </b>{this.props.account.balance}</li>
                                        <li className="list-group-item"><b>Date Created: </b>{this.props.account.dateCreated}</li>
                                        <li className="list-group-item"><b>Last Updated : </b>{this.props.account.lastUpdated}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AccountDetailModal