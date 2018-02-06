import React from 'react'
import {Col, Row, Well, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import {addToCart, updateCart} from '../../actions/cartActions';

class MetricItem extends React.Component{
	
	render(){
		return(
			<Well>
				<Row>
					<Col xs={12}>
						<h6>{this.props.name}</h6>
						<p>{this.props.description}</p>
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
export default MetricItem //connect(mapStateToProps, mapDispatchToProps)(MetricItem);