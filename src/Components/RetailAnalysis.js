import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter,Card,CardText, CardBody, Button, Form, FormGroup, Input} from 'reactstrap';

class RetailAnalysis extends Component {
  constructor(props){
    super(props);

    this.state = {
      modal : false,
      name: "",
      size: "",
    }

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle(){
    this.setState({
      modal : !this.state.modal
    })
  }

  handleSubmit(e){
    this.setState({
        name : this.refs.rname.value,
        size : this.refs.rsize.value
      })
    e.preventDefault();
    this.toggle()
  }

  render() {
    return (
      <div>

        <Button onClick={this.toggle}>Drop pin</Button>

        <Modal isOpen={this.state.modal}>
        <ModalHeader>Add Mall</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <p><Input type="text" ref="rname" placeholder="Name of the mall"/></p>
            <p><Input type="text" ref="rsize" placeholder="Size of the mall"/></p>
            <Button color="primary" type = "submit">Add Mall</Button>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </Form>
        </ModalBody>
        </Modal>

        <Card style={{textAlign: "left", margin:"25px", backgroundColor: "#ffffff"}}>
          <CardBody>
            <CardText> Name of Mall : {this.state.name} </CardText>
            <CardText>Size of Mall : {this.state.size}</CardText>
            <CardText>Location :</CardText>
            <CardText>Expected Footfall :</CardText>
            <CardText>Expected Revenue :</CardText>
            <Button style={{position: "absolute", left:"50%", bottom:0}}>Save</Button>
          </CardBody>
        </Card>
     </div>
    );
  }
}

export default RetailAnalysis;
