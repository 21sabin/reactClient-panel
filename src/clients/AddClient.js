import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import {Link } from 'react-router-dom'


class AddClient extends Component {
  state={
    firstname:'',
    lastname:'',
    gmail:'',
    phone:'',
    balance:''
  }

  onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }

  handleOnsubmit(e){
    e.preventDefault();
    const  newClient  =this.state;
    const {firestore ,history} = this.props;

    if(newClient.balance===''){
      newClient.balance = 0;
    }

    firestore.add({collection:"client"},newClient).then(result=>{
      history.push('/')
    })


 
    
  }
    render() {
        return (
            <div
                className="container"
                style={{
                marginTop: '30px'
            }}>
           <span ><i className="fas fa-arrow-circle-left"></i> </span><Link to="/">Back to dashboard</Link>
                <div className="card">
                    <div className="card-header">
                        <h4
                            style={{
                            float: 'left',
                            color: 'blue'
                        }}>Add Client</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleOnsubmit.bind(this)}>
                            <div className="form-group">
                                <label for="Firstname">Firstname</label>
                                <input type="text" name="firstname" onChange={this.onChange} className="form-control" placeholder="firstname" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname" className="for">lastname</label>
                                <input type="text" name="lastname" onChange={this.onChange} className="form-control" placeholder="lastname" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="gmail" className="for">Email</label>
                                <input type="email" name="email" onChange={this.onChange} className="form-control" placeholder="email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone" className="for">Phone</label>
                                <input type="text" name="phone"onChange={this.onChange}  className="form-control" placeholder="phone" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstname" className="for">Balance</label>
                                <input type="text" name="balance" onChange={this.onChange} className="form-control" placeholder="balance" required/>
                            </div>
                            <div className="form-group">

                                <input
                                    type="submit"
                                    className="form-control btn btn-primary btn-block"
                                    value="Add"/>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

AddClient.prototypes ={
  firestore:PropTypes.object.isRequired
}
export default firestoreConnect()(AddClient);
