import React from 'react';

const Imgslider =()=>{
    return(
        <div>
    <div id="carouselExampleControls" class="carousel slide mt-5" data-ride="carousel">

    <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="w-50"src="https://on-track.in/wp-content/uploads/2018/12/fc7fc50a-60a6-4d32-a8b4-fbdeac8ea3f7.png" class="d-block w-100" alt="honda"></img>
      <div className="carousel-caption d-none d-md-block">
      <button type="button" class="btn btn-success rounded-pill">Rent Now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img className="w-50"src="https://www.drivedrivecar.com/assets/img/list-car.png" class="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
      <button type="button" className="btn btn-success rounded-pill">Rent now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img className="w-50"src="https://i.ytimg.com/vi/9D8HYavo4SA/maxresdefault.jpg" class="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
      <button type="button" className="btn btn-success rounded-pill">Rent Now Car</button>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
 </div>
 
 </div>
    )
}
export default Imgslider;