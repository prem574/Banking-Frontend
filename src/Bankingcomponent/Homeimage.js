import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { MDBContainer } from 'mdbreact';

class Homeimage extends Component {
   
    render() { 
        return (
        <div>
        <Card className="text-white">
        <Card.Img src={"https://www.sheetkraft.com/wp-content/uploads/2021/07/GEN-Davenport-Schaefer-COE-1290x860-1-1270x815.jpg"} alt="" height="500" />
                <Card.ImgOverlay>
                    <Card.Title>
                    <MDBContainer >
                    </MDBContainer>
                    </Card.Title>
                    
                    
                </Card.ImgOverlay>
        </Card>
        <br />
        <br/>
        
        </div> );
    }
}
 
export default Homeimage;