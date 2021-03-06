import React from 'react';
import Menu from './components/menu';
import Footer from './components/footer';

import {connect} from 'react-redux'

class Main extends React.Component{
	render(){
		return(
			<div>
				<Menu cartItemNumber="1"/>
					{this.props.children}
				<Footer />
			</div>
		);
	}
}


function mapStateToProps(state){
	return {
		// totalQty: state.cart.totalQty
	}
}
export default connect(mapStateToProps)(Main);