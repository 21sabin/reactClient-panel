//configuring our store to firebase
//two type of database in firebase ie realtime database and firestore

import {createStore,combineReducers,compose} from 'redux';
import { reactReduxFirebase, reduxFirebase ,firebaseReducer} from 'react-redux-firebase';
import firebase from 'firebase';
import {reduxFirestore,firestoreReducer} from 'redux-firestore';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBah4GUF9jknGULkUbsx9aP3tADlLN8weA",
    authDomain: "reactclient-panel-fb0f9.firebaseapp.com",
    databaseURL: "https://reactclient-panel-fb0f9.firebaseio.com",
    projectId: "reactclient-panel-fb0f9",
    storageBucket: "reactclient-panel-fb0f9.appspot.com",
    messagingSenderId: "163440860243"
  };

  // react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true};

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore)
  
  // Add firebase to reducers
  const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  })

  // Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState,compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


export default store;





