import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home.js';
import Login from './component/login.js';
import Model from './component/model.js';
import Book from './component/Book.js';



import './component/nav.css';

class App extends React.Component {
  render (){
  return (
    <div>
     
     <BrowserRouter>
        
        <Navbar /> 

       <Route path="/" exact component={Home} />

       <Route path="/ Model"  component={Model} />

       <Route path="/ Book"  component={Book} />

        <Route path="/Login"  component={Login} />
        


         </BrowserRouter>

       
    </div>
   
  );
 }
}

export default App;
