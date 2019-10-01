import React,{Component} from 'react';

   let globlearr=[];
 class Book extends Component {
     constructor(props){
         super(props)
         this.state={
             Username:'',
             topic:0,
             Emailadress:'',
             Amount:'',
             Model:"",
             status:false,
             data:[],
             price:'',
             From:'',
             To:'',
             Date:''
            
         }
     }
     handleUsernameChange = (e) =>{
     this.setState({
        Username: e.target.value

         
     })
     }
     handletopicChange =(e)=>{
         this.setState({
             topic:e.target.value
            //  status:false
         })
     }
   


     handleEmailadress =(e)=>{
         this.setState({
             Emailadress:e.target.value
         })
     }
     handleFromChange =(e)=>{
        this.setState({
            From:e.target.value
           //  status:false
        })
    }

    handleToChange =(e)=>{
        this.setState({
            To:e.target.value
           //  status:false
        })
    }
      handleAmountChange=(e)=>{
         this.setState({
            
             Amount:e.target.value
            
         })
        
     }
     handleModelChange=(e)=>{
         this.setState({
             Model:e.target.value
         })
     }
     handleDateChange=(e)=>{
        this.setState({
            Date:e.target.value
        })
    }

     handleSubmit =(e)=>{
        //  alert(`${this.state.Username} ${this.state.topic}`)
         e.preventDefault()
        //  console.log(this.state.Username ,this.state.topic)
        this.setState({
            status:true
        })
        this.state.data.push(this.state)
        // console.log(this.state.topic);
        if(this.state.Model==='maruti'){
            // console.log("maruti selec")
            var rent = this.state.topic*300;
            if(this.state.topic==30){
            // alert(rent);
            rent=rent*0.8
            this.setState({
                price:rent,
            })
        }
        else{
            this.setState({
                price:rent,
            })
        }
        }
        if(this.state.Model==='suzuki'){
            // console.log("maruti selec")
            var rent = this.state.topic*700;
            if(this.state.topic==30){
            // alert(rent);
            rent=rent*0.8
            this.setState({
                price:rent,
            })
        }
        else{
            this.setState({
                price:rent,
            })
        }
        
        }
        if(this.state.Model==='plessure'){
            // console.log("maruti selec")
            var rent = this.state.topic*100;
            if(this.state.topic==30){
            // alert(rent);
            rent=rent*0.8
            this.setState({
                price:rent,
            })
        }
        else{
            this.setState({
                price:rent,
            })
        }
         
        }
        globlearr.push(this.state);

        // console.log(globlearr);
        // localStorage.setItem("BookDtails", JSON.stringify(this.state));
     }
     

     render(){
        
        //   console.log(this.state.data.map((i)=>i));
        //  var a= this.state.data.map((i)=>i);
        // console.log(this.state.price);
         return(
             <div style={{"marginLeft":"150px","marginTop":"-150px"}} >
                
             <form onSubmit={this.handleSubmit}>
             <div>
              <select value={this.state.Model} onChange={this.handleModelChange} className="form-control w-25">
              <option value=""> Brand </option>
               <option value="maruti">maruti </option>
               <option value="suzuki"> suzuki </option>
               <option value="plessure"> plessure</option>
           </select>
           </div>
           <div>
           <select value={this.state.From} onChange={this.handleFromChange} className="form-control w-25">
              <option value=""> location</option>
               <option value="HAL">HAL </option>
               <option value="Forum Mall">Forum Mall </option>
               <option value="BTM Layout">BTM Layout</option>
           </select>
           <select value={this.state.To} onChange={this.handleToChange} className="form-control w-25 ">
              <option value=""> Location</option>
               <option value="HAL">HAL </option>
               <option value="Forum Mall">Forum Mall </option>
               <option value="BTM Layout">BTM Layout</option>
           </select>
           </div>
           <div>
               <label className="text-success">Date :</label>
               <input type="Date"className="form-control w-25" value={this.state.Date} 
                onChange={this.handleDateChange}></input>
               <label className="text-success"> UserName</label>
               <input type="text" className="form-control w-25" value={this.state.Username} 
                onChange={this.handleUsernameChange}/>
                <label className="text-success font-weight-bolder">Email Adress </label>
                <input  type="text" className="form-control w-25 " value={this.state.Emailadress} onChange={this.handleEmailadress}></input>
                <label className="text-success font-weight-bolder"> Total Amount</label>
                <input type="interger"className="form-control w-25" value={this.state.topic} onChange={this.handleAmountChange} /> 
              
                
           </div>
           <div>
              <select value={this.state.option} onChange={this.handletopicChange} className="form-control w-25">
              <option value="day"></option>
               <option value="1">one day </option>
               <option value="2">Two day </option>
               <option value="30">One Month</option>
           </select>
           </div>
           <button>Submit</button>
           </form>
           {/* <h1> {this.state.status?this.state.Username:null}</h1>
           <h1> {this.state.status?this.state.topic:null}</h1> */}
             <div className="card text-dark float-right  bg-light " style={{"marginRight":"300px","marginTop":"-450px","width":"500px"}}>
              {this.state.status?this.state.data.map((i) =>{return <p>
              <p className="text-dark bg-success text-center"> Booking successFully</p> Full Name:{i.Username}<br></br> Day:{i.topic}days<br></br>
              Emailadress: {i.Emailadress} <p> From:{i.From}</p><p> To:{i.To}</p> <p> Date: {i.Date}</p>Model: {i.Model} </p>}):null}
              <h1  className="text-dark"> Total Price:{this.state.price}</h1>
             </div>
           
           </div>
          
         )

     }
 }
 export default Book;