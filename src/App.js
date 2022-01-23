import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
//react-router
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';

//tostify
import { ToastContainer } from 'react-toastify';
//import "react-toastify/dist/react-toastify.min.css"

//Firebase
// import firebase from "firebase/app"
// import "firebase/auth"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

//components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";


import './App.css';
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import firebaseConfig from './config/firebaseConfig';
// Init Firebase
firebase.initializeApp(firebaseConfig)

const App = () => {
  const [user, setUser] = useState(null)




  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user,setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>

    </Router>
  );
}

export default App;
