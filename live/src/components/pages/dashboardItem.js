import React from 'react'
import {Col, Array, Row, Well, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getDashboardItemsData} from '../../actions/dashboardItemActions';
import GraphItem from './graphItem'

// import {addToCart, updateCart} from '../../actions/cartActions';

class DashboardItem extends React.Component{
	componentDidMount(){
		let metric = {}
		this.props.settings.map((setting)=>{
			metric[setting.key] = setting.value
		})
		let metaData = {
			metric: metric,
			id: this.props.id
		}

		this.props.getDashboardItemsData(metaData);

	}
	handleSubmit(){
		console.log("#" + this.props.id + " CLICKED")
	}

	render(){
		
		if(this.props.itemData.length > 0){
			// console.log("ITEM #" + this.props.id + " is NOT empty")
			return(this.RenderItemDataReceived());
		}else{
			// console.log("ITEM #" + this.props.id + " IS empty")
			return(this.renderEmpty());
		}
		
		/*let bgColor = this.state.color_black ? "black" : "white"*/
		
	}
	RenderItemDataReceived(){
		return(
			<Well>
				<Row>
					<Col onClick={this.handleSubmit.bind(this, this.props.id)}  xs={12} md={12}>
						<h6>{this.props.id}. {this.props.name}</h6>
						<p>{this.props.description}</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<GraphItem settings= {this.props.settings} itemData= {this.props.itemData[0].data} id = {this.props.id}/>
					</Col>
				</Row>
			</Well>
		)
	}
	renderEmpty(){
		return(<div></div>);
	}
}

function mapStateToProps(state, ownProps){
	
	let dashboard_items_data = state.itemData.dashboardItemsData
	// Get index of the dashboard item
	let itemIndex = dashboard_items_data.findIndex((item_data)=>{
		return item_data.item_id === ownProps.id;
	})
	// console.log("dashboardItem id: " + ownProps.id + ", has id " + itemIndex + " in dashboard items. The following data is:")
	
	let this_item_data = []
	if (itemIndex > -1){
		this_item_data = [dashboard_items_data[itemIndex]]
	}
	
	return {
		user: state.user,
		// settings: ownProps.settings
		// settings: state.dashboard.dashboards[0].DashboardItems[itemIndex].Settings,
		itemData: this_item_data
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getDashboardItemsData:getDashboardItemsData
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardItem);