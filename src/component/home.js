import React from 'react';
import Slider from './slider.js';
 import Imgslider from './imgslider';

const Home =()=>{
    return(
        <div>
           
            <div className="bg-primary float-left" style={{"marginTop":"-150px"}}>
             <div className="float-left">
            <img className="w-50 " src="https://on-track.in/wp-content/uploads/2019/09/banner2-1.png"></img>
            <div className="float-right text-white " style={{"marginTop":"100px","marginRight":"150px"}}>
             <h1 style={{"font-family": "'Sacramento', cursive" ,"fontSize":"50px"}}> Monthly Bike Rental</h1>
             <h4 className="mt-4"> aims to give day-to-day travellers an <br></br>opportunity to rent bikes and travel smartly!</h4>
             <p className="mt-4"> Make your everyday travel hours effortless and cost-effective!</p>
             <button type="button" class="btn btn-light mt-5 rounded-pill">Explore Bike</button>
             </div>
            </div>
            </div>
            <Slider />
            <Imgslider />
        </div>
    )
}
export default Home;