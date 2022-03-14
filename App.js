import React from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';



const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={()=> <Home/>}/>
        <Route path='/add'>
        <AddContact/>
        </Route>
        <Route path="/edit/:id">
        <EditContact/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
