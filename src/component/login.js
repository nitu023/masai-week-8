import React from 'react';
import './nav.css';

const Login =()=>{
    return(
        <div>
           
        <div class="signup-form " style={{"marginTop":"-100px"}}>
        <form  method="post">
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr></hr>
        <div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-user"></i></span>
				<input type="text" class="form-control" name="username" placeholder="Username" required="required"></input>
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-paper-plane"></i></span>
				<input type="email" class="form-control" name="email" placeholder="Email Address" required="required"></input>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-lock"></i></span>
				<input type="text" class="form-control" name="password" placeholder="Password" required="required"></input>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<span class="input-group-addon">
					<i class="fa fa-lock"></i>
					<i class="fa fa-check"></i>
				</span>
				<input type="text" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"></input>
			</div>
        </div>
        <div class="form-group">
			<label class="checkbox-inline"><input type="checkbox" required="required"></input> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
        </form>
	<div class="text-center">Already have an account? <a href="#">Login here</a></div>
</div>
</div>

    )
    
    
}
export default Login;