import React from 'react'
import {Grid,Col, Row, Well, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import DashboardItem from './dashboardItem'
// import {addToCart, updateCart} from '../../actions/cartActions';

class DashboardItemsList extends React.Component{

  	handleSubmit(id){
  		/*this.setState({color_black: !this.state.color_black})*/
  	}

  	render(){

		const DashboardItemsList = this.props.dashboard_items.map((Item)=>{
				return(
					<Col xs={12} md={6} xl={6}key={Item.id}>
						 {/*By setting is, name and description the DashboardItem-object will have these as own properties */}
						<DashboardItem 
						id ={Item.id}
						name ={Item.name}
						description ={Item.description}
						settings = {Item.Settings}/>
					</Col>
				)
		  	}
		)
		
		return(
			<Grid>
				<Row>
					<Col xs={12} md={12}>
					{DashboardItemsList}
					</Col>
				</Row>
			</Grid>
		)
	}
}

function mapStateToProps(state){
	return {
		// user: state.user,
		dashboard_items: state.dashboard.dashboards[0].DashboardItems
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardItemsList);