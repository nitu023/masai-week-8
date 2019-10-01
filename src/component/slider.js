import React from 'react';

const Slider =()=>{
    return(
        <div>
           <div className="bg-light float-left mt-5" style={{"marginTop":"-150px"}}>
             <div className="float-left">
            <img className="w-50 " src="https://on-track.in/wp-content/uploads/2018/12/fc7fc50a-60a6-4d32-a8b4-fbdeac8ea3f7.png"></img>
            <div className="float-right  " style={{"marginTop":"100px","marginRight":"150px"}}>
             <h1 style={{"fontSize":"40px"}}className="text-primary !important" > Honda Active 3G/4G/5G</h1>
             <h2 className="text-body !important text-center" > ₹3660</h2>
             <button type="button" class="btn btn-success rounded-pill">Rent Now</button>
    
            </div>
            </div>
            </div>
            
        </div>
    )
}
export default Slider;