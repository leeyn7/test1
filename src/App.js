import React, { Component } from 'react';
import ReactMapGL , {NavigationControl}from "react-map-gl";
import './App.css';
import SplitPane from "react-split-pane";
import {Button} from "reactstrap";
import Header from "./Components/Header.js"

const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9lbG93ajExMTciLCJhIjoiY2pieXhteXNyM2R6NjMybWt1Z3J0YzhwbCJ9.dz64n7fJOwfjorOJDxTX1w'


class App extends Component {
  constructor(){
    super();
    this.state = {
      viewport: {
        height : window.innerHeight,
        width : window.innerWidth,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      },
      isHidden:true,
    };
    this.onViewportChange = this.onViewportChange.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  onViewportChange(viewport){
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  toggleHidden(){
  this.setState({
    isHidden: !this.state.isHidden
    })
  }



  render() {
     if (!this.state.isHidden){
      return(
        <div className="App">
            <SplitPane split="horizontal" defaultSize="50%" allowResize={false}>
              <div style={{position:'absolute',bottom:'0%'}}>
                <ReactMapGL {...this.state.viewport} onViewportChange={this.onViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} style={{textAlign: 'left'}}>
                  <div style={{position: 'absolute', right:'15px', bottom:"40%"}}>
                    <NavigationControl onViewportChange={this.onViewportChange}/>
                  </div>
                </ReactMapGL>
                <Button style={{position:'absolute',left:'50%', bottom:"0%"}} onClick={this.toggleHidden}/>
              </div>
              <div>
                <Header/>
              </div>
          </SplitPane>
      </div>
      )
    }

  else {
    return (
      <div className="App">
        <ReactMapGL {...this.state.viewport} onViewportChange={this.onViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} style={{textAlign: 'left'}}>
          <div style={{position: 'absolute', right:'15px'}}>
            <NavigationControl onViewportChange={this.onViewportChange}/>
          </div>
            <Button onClick={this.toggleHidden} style={{position:'absolute',bottom:'15px', left:'50%'}}/>
        </ReactMapGL>
      </div>
    );}
  }
}


    // return (
    //  <ReactMapGL
    //    {...this.state.viewport}
    //    onViewportChange={(viewport) => this.setState({viewport})}
    //    mapboxApiAccessToken={MAPBOX_TOKEN}
    //  />
   //);
//  }
// }
// }

export default App;
