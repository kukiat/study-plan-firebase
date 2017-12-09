import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './static/style.css'
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDCKoogU8Gro_-6q8GXE8vejxWqleBmK3s",
  authDomain: "study-plan-db.firebaseapp.com",
  databaseURL: "https://study-plan-db.firebaseio.com",
  projectId: "study-plan-db",
  storageBucket: "study-plan-db.appspot.com",
  messagingSenderId: "216581404044"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
