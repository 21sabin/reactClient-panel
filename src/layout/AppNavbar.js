import React, { Component } from 'react'
 
class AppNavbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
        <a class="navbar-brand" href="#" style={{color:'white'}}>Client Panel</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              
            </li>
           
          </ul>
         
        </div>
        </div>
       
      </nav>
    )
  }
}


export default AppNavbar;

