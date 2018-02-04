import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {Grid, Well, Col, Row, Button} from 'react-bootstrap'

// ----- import dependencies and packages ----- //
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
// -------------------------------------------- //
var is_authed = false;
const responseGoogle = (response) => {
	console.log("trying to login")
	console.log(response);
	if (response.error){
		console.log(response.error)
	}else{
		console.log("Login worked")
		is_authed = true;
		console.log(is_authed)
	}
}

const logout = (response) => {
	console.log("trying to logout")
	console.log(response);
}

class Login extends React.Component {
	
	render(){

		return(
			<Well>
				<Row>
					<Col xs={12}>
						<h6>Login</h6>
						<p>Please Login with Google</p>
						<p>is_authed: {(this.is_authed) ? 'true' : 'false'}</p>
						<GoogleLogin
							clientId="716315245150-tr84lm5eth0m6h60c6tial9ohvafnpdc.apps.googleusercontent.com"
							buttonText="Login"
							onSuccess={responseGoogle}
							onFailure={responseGoogle}>
							<span> Login with Google</span>
							</GoogleLogin>
							<GoogleLogout
							  buttonText="Logout"
							  onLogoutSuccess={logout}>
							</GoogleLogout>
					</Col>
				</Row>
			</Well>
			)
	}
}
// function mapStateToProps(state){
// 	return{
// 		cart:state.cart.cart
// 	} 
// }
// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({
// 		addToCart:addToCart,
// 		updateCart:updateCart
// 	}, dispatch)
// }
export default Login;