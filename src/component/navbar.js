import React from "react";
import { Route, BrowserRouter, Link } from 'react-router-dom';


function Navbar (){
    return(
        <div style={{marginBottom:300}}>
            
    <React.Fragment>
          <nav id="navbar-example2" className="navbar navbar-light bg-light fixed-top ">

          <p className="ml-5 text-primary  font-weight-bold"> Bangalore</p>

          <div>
           <a href="/https://store.google.com"><img style={{"width":"150px","marginLeft":"-30px" }}  src="https://chesbank.com/media/1398/800px-get_it_on_google_playsvg.png"></img></a>

          <a href="/https://store.google.com"> <img style={{"width":"150px","marginLeft":"10px" }}  src="https://cdn.worldvectorlogo.com/logos/download-on-the-app-store-apple.svg"></img></a>
         
           </div>

           <div>
          <h1 className =" font-weight-bold "style={{ "color":" blue ","fontSize":"50px" ,"font-family": "'Dancing Script', cursive"}}> ONTRACK</h1>
          </div>
          <div>
          <Link style={{"float":"right" ,"marginLeft":"30px"}} className="text-secondary"to="/ Home">Home</Link>

          <Link style={{"float":"right","marginLeft":"30px"}} className="text-secondary"to="/ Model">Models</Link>

          <Link style={{"float":"right" ,"marginLeft":"50px"}} className="text-secondary"to="/Howitwork">How it Work</Link>

          <Link style={{"float":"right" ,"marginLeft":"50px"}} className="text-secondary"to="/Login">Login/SignUp</Link>
     
          </div>

           </nav>
         
     </React.Fragment>
      
        </div>
    )
}
export default Navbar;