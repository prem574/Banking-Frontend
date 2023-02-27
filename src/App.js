
import './App.css';
import Home from './Bankingcomponent/Home/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import NavbarComponent from './Bankingcomponent/NavabarComponent';
import Userlogin from './Bankingcomponent/Login/Userlogin';
import UserRegistration from './Bankingcomponent/Registration/UserRegistration';
import ListAccountComponent from './Bankingcomponent/Account/ListAccountComponent';
import AddAccountcomponent from './Bankingcomponent/Account/AddAccountComponent';
import AddThirdPartyComponent from './Bankingcomponent/Third Party/AddThirdPartyComponent';
import ListThirdPartyComponent from './Bankingcomponent/Third Party/ListThirdPartyComponent';
import ViewThirdPartyComponent from './Bankingcomponent/Third Party/ViewThirdPartyComponent';
import ListTransactionComponent from './Bankingcomponent/Transaction/ListTransactionComponent';
import NewTransactionsComponent from './Bankingcomponent/Transaction/NewTransactionsComponent';

function App() {
  return (
    <div className="App" >
    <div className="container">
    <div className="row">
    <div className="col-sm-12">
    <NavbarComponent/>
    {/* <a>
           style={{width: 400, height: 100}}  
          <img  style={{ height: "100px", margin: "10px 0"}}  
          src="https://img.freepik.com/free-vector/finance-services-financial-transaction-e-commerce-e-payment_335657-3134.jpg" alt="" />
        </a> */}
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" style={{height:"345px"}}  src="https://i0.wp.com/financebuddha.com/blog/wp-content/uploads/2020/04/How-to-Get-a-Low-Interest-Personal-Loan-in-India.png?w=1280&ssl=1" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={{height:"345px"}} src="https://cdnblog.etmoney.com/wp-content/uploads/2021/12/best-practices-for-home-loans.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={{height:"345px"}} src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/Loan_1643433073.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    <Router>
          <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path = "/Accounts/:id" element = {<ListAccountComponent/>}/>
          <Route path = "/add-account" element = {<AddAccountcomponent/>}/>
          <Route path = "/user-login" element = {<Userlogin/>}/>
          <Route path = "/user-registration" element = {<UserRegistration/>}/>
          <Route path = "/add-ThirdParty/:id" element = {<AddThirdPartyComponent/>}/>
          <Route path = "/ThirdParty/:id" element = {<ViewThirdPartyComponent/>}/>
          {/* <Route path = "/edit-Third Party" element = {<ViewThirdPartyComponent/>}/> */}
          <Route path = "/transaction/:id" element = {<ListTransactionComponent/>}/>
          <Route path = "/transfer/:id" element = {<NewTransactionsComponent/>}/>
          </Routes>
          </Router>
          </div>
    </div>
    </div>
  </div>
  );
}

export default App;
