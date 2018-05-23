import React, { Component } from 'react';
import {InputGroup, Modal, ModalHeader, ModalBody, ModalFooter, Table,Form, FormGroup, Label, Input,Button } from 'reactstrap';
import Inputs from "./Input.json";
import Slider, {Range} from "rc-slider";
import "rc-slider/assets/index.css";

class Data extends Component{
  constructor(props){
    super(props);
    this.sortByAlphabetical = this.sortByAlphabetical.bind(this);
    this.sortByNumerical = this.sortByNumerical.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.updateSearch = this.updateSearch.bind(this);

    this.state = {
      Inputs: Inputs,
      Search:"",
      sortByDirection: {
        Retail: "asc",
        Population_Catchment : "desc",
        Population_Probabilistic: "desc"
      },
      Filter: false,
    }
  }


  sortByAlphabetical(key){
    this.setState({
      Inputs: Inputs.sort((a,b) => (
        this.state.sortByDirection[key] === "asc"
          ? a[key].toLowerCase() < b[key].toLowerCase()
          : b[key].toLowerCase() < a[key].toLowerCase()
      )),

      //Toggle sorting direction
      sortByDirection:{
        [key]: this.state.sortByDirection[key] === "asc"
          ? "desc"
          : "asc"
      }
    })
  }

  sortByNumerical(key){
    this.setState({
      Inputs: Inputs.sort((a,b) => (
        this.state.sortByDirection[key] === "asc"
          ? parseFloat(a[key].replace(/[,]/g, '')) - parseFloat(b[key].replace(/[,]/g, ''))
          : parseFloat(b[key].replace(/[,]/g, '')) - parseFloat(a[key].replace(/[,]/g, ''))
        )),

      //Toggle sorting direction
      sortByDirection:{
        [key]: this.state.sortByDirection[key] === "asc"
          ? "desc"
          : "asc"
      }
    })
  }

  toggleFilter(){
    this.setState({
      Filter : !this.state.Filter
    })
  }

  updateSearch(e){
    this.setState({
      Search: e.target.value
    })
  }




  render(){

    let searchResults = this.state.Inputs.filter(
      (row) => {
        //do not return row if search is not found
        return (row.Retail.indexOf(this.state.Search) !== -1);
      }
    );


    return(
      <div>
      <InputGroup class="col-md-4 pull-right">
          <Input type="text" value={this.state.Search} onChange={this.updateSearch} placeholder="Search Retail"/>
          <Button style={{marginLeft: 10 }} onClick={this.toggleFilter}/>
          <Modal isOpen={this.state.Filter} toggleFilter={this.toggleFilter}>
            <ModalHeader toggleFilter={this.toggleFilter}>Filter</ModalHeader>
            <ModalBody>
              <p>Population Catchment
                <Slider/>
              </p>
              <p>Population Probabilistic
                <Slider/>
              </p>
              <p>Average Pricing Catchment
                <Slider/>
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleFilter}>Save Change</Button>
              <Button color="secondary" onClick={this.toggleFilter}>Close</Button>
            </ModalFooter>
          </Modal>
      </InputGroup>
      <Table hover style={{padding:"25px"}}>
        <thead>
          <tr>
            <th>#
            </th>
            <th>Retail
              <Button style={{marginLeft: 5 }} size="sm" onClick={() => {this.sortByAlphabetical("Retail")}}/>
            </th>
            <th>Population Catchment
              <Button style={{marginLeft: 5 }} size="sm" onClick={() => {this.sortByNumerical("Population_Catchment")}}/>
            </th>
            <th>Population Probabilistic
              <Button style={{marginLeft: 5 }} size="sm" onClick={() => {this.sortByNumerical("Population_Probabilistic")}}/>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            searchResults.map((row,i) => (
              <tr>
                <td>{i+1}</td>
                <td>{row.Retail}</td>
                <td>{row.Population_Catchment}</td>
                <td>{row.Population_Probabilistic}</td>
              </tr>
            ))
          }
        </tbody>
    </Table>
    </div>
    );
  }
}

export default Data;
// Projects.propTypes={
//   projects: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// }
