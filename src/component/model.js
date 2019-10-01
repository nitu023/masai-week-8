import React from "react";
import {Link} from "react-router-dom";
import Book from './Book.js';

 class Model extends React.Component{
     constructor(){
         super();
         this.state={
             value :[
                 {
                     id:"card1",
                     imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/03-suzuki-access-125.webp",
                    name:"Suzuki Access 125",
                     cost:" ₹3850"

                 },
                 {
                    id:"card2",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/08-honda-activa.webp",
                    name:"BNTO Canning Jar Lunchbox Adaptor -  ",
                    name:"Suzuki Access 125",
                     cost:"₹3850"

                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/12-bajaj-avenger-street-150.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/10-bajaj-pulsar-150.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/11-bajaj-ct-100.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/10-bajaj-pulsar-150.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/10-bajaj-pulsar-150.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/10-bajaj-pulsar-150.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/02-tvs-jupiter.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/02-tvs-jupiter.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/02-tvs-jupiter.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/02-tvs-jupiter.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/02-tvs-jupiter.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/02-tvs-jupiter.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/14-aprilia.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/14-aprilia.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },
                {
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/14-aprilia.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                },{
                    id:"card3",
                    imageurl:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/300px-webp/14-aprilia.webp",
                    name:"Suzuki Access 125",
                     cost:"₹3850"
                }
               
             ]
         }
     }
     render(){
         return(
             <div style={{"marginTop":"-180px" ,"marginLeft":"150px"}}>
                 {
                     this.state.value.map((item,index)=>{
                         return(
                             <div className="card float-left  ml-5 col-3 bg-gradient-warning" style={{"marginTop":"50px"}}>
                                 <img  className="w-100 "src={item. imageurl}></img>
                                 <p  className="ml-2 text-center text-body font-weight-bolder">  {item.name}</p>
                                 <p style={{"marginTop":"-20px"}} className="ml-2 text-center text-success font-weight-bolder"> {item.cost}</p>
                                 <button type="button" class="btn btn-success w-100"><Link to="/ Book">Book Now</Link></button>

                             </div>
                         )
                     })
                 }
                 
             </div>
         )
     }

 }

 export default Model;