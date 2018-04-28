import React from 'react'
import {Grid,Col, Row, Well, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import MetricsItem from './metricItem'
// import {addToCart, updateCart} from '../../actions/cartActions';

class DashboardItemsList extends React.Component{

  	handleSubmit(id){
  		/*this.setState({color_black: !this.state.color_black})*/
  	}

  	render(){

		const DashboardItemsList = this.props.dashboard_items.map((Item)=>{
				return(
					<Col xs={12} md={12} key={Item.id}>
						<MetricsItem 
						id ={Item.id}
						name ={Item.name}
						description ={Item.description}/>
					</Col>
				)
		  	}
		)
		
		return(
			<Grid>
				<Row>
					<Col xs={12} sm={6}>
					{DashboardItemsList}
					</Col>
				</Row>
			</Grid>
		)
	}
}

function mapStateToProps(state){
	return {
		user: state.user,
		dashboard_items: state.dashboard.dashboards[0].DashboardItems
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardItemsList);