import React, {Component} from 'react'
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect,firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'


class Clients extends Component {

    state={
        totalOwed:null
    }

    //it is used to update the state before it render
    static getDerivedStateFromProps(props, state) {
        const { clients } = props;
        if(clients){
            const total = clients.reduce((total,client)=>{
                return total + parseFloat(client.balance.toString())
            },0)
            return { totalOwed:total}
            
        }
           
            return null;
    }

    render() {
        const { clients } =this.props;
        if(clients){
            return (
           
                <div>
                    <h3>
                        <span>
                            <i className="fas fa-users"></i>
                        </span>{' '}Clients</h3>
                        <p className="tex-primary">Total Owed {' '} <b className="text-info">${ this.state.totalOwed}</b> </p>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">phone</th>
                                <th scope="col">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                           
                          {
                             
                               
                            clients.map(client=>(
                                <tr key={client.id}>
                                    <td>{client.firstName}{client.lastName}</td>
                                    <td>{client.phone}</td>
                                    <td>${parseFloat(client.balance).toFixed(2)}</td>
                                    <td><Link to={`/client/${client.id}`} className="btn btn-info btn-sm" style={{padding:'4px'}}>
                                    <span ><i className="fas fa-arrow-circle-right" ></i></span>Details</Link></td>
                                    </tr>
                            ))
                         }
    
                        </tbody>
                    </table>
                </div>
            )
        }else{
            return (
                <h1>Loading....</h1>
            )
        }
       
    }
}

// Client.prototype= {
//     clients:PropTypes.array.isRequired
// }

export default compose(
    firestoreConnect([{ collection: 'client' }]),
    connect((state, props) => ({
      clients: state.firestore.ordered.client
    }))
  )(Clients);
// export default compose(
//     firebaseConnect([
//       'client' ,{ path: '/client' } // object notation
//     ]),
//     connect((state) => ({
//       clients: state.firebase.ordered.client,
//       profile: state.firebase.profile // load profile
//     }))
//   )(Client)

