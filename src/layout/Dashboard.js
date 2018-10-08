import React, { Component } from 'react'
import Clients from './../clients/Client';
import Sidebar from './Sidebar';


class Dashboard extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-md-10">
                <Clients />
            </div>
            <div className="col-md-2">
                <Sidebar />
            </div>
          </div>
      </div>
    )
  }
}

export default Dashboard;

