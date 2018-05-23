import React, { Component } from 'react';
import Data from "./Data";
import Dashboard from "./Dashboard";
import RetailAnalysis from "./RetailAnalysis";
import {Container, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';

class Header extends Component {

    constructor(props){
      super(props);
      this.changeTab = this.changeTab.bind(this);
      this.state= {
        activeTab: "Dashboard",
      };
    }

    changeTab(tab){
      if (this.state.activeTab !== tab){
        this.setState({
          activeTab: tab
        })
      }
    }


    render() {
      return (
        <div style={{backgroundColor: "#f2f2f2"}}>
          <Container classname="header" fluid style={{backgroundColor: '#e6e6e6', position: "absolute", top:0, bottom:"90%", left:0, right:0}}>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === 'Dashboard' })}
                    onClick={() => { this.changeTab('Dashboard'); }}>
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === 'Data' })}
                    onClick={() => { this.changeTab('Data'); }}>
                    Data
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === 'RetailAnalysis' })}
                    onClick={() => { this.changeTab('RetailAnalysis'); }}>
                    Retail Analysis
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId = "Dashboard">
                  <Dashboard/>
                </TabPane>
                <TabPane tabId = "Data">
                  <Data/>
                </TabPane>
                <TabPane tabId = "RetailAnalysis">
                  <RetailAnalysis/>
                </TabPane>
              </TabContent>
          </Container>
        </div>
      )}
}


export default Header;
