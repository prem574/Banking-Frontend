import Mission from "../../Mission";
import React, { Component } from 'react';
import Homeimage from "../Homeimage";
import "../styles/Home.css";
class Home extends Component{
    render() {
        return (
            
            <div className = "bg-dark">
                <Homeimage/>
                <Mission/>
                <br>
                
                </br>
                
                {/* <h1 className="head text-white" align="center"> Our Doctors </h1>
                <br />
                <br/>
                <OurDoctors/>

                <br></br>
                <br></br>
                <h1 className="text-white" align="center">News and Achievements</h1>
                <br/>
                <br/>
                <HomeQuote/>
                <br/> */}
                <br/>
               
            </div>
        );
    }
}
export default Home;
