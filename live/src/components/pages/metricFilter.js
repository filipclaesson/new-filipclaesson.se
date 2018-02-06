import React from 'react'
import {Col, Button, MenuItem, ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


const metric_type = ["Sold Price/sqm", "List Price/sqm", "Price increase %/sqm"]
const period_time = ["1 Week", "1 Month", "3 Month", "6 Month", "1 Year"]
const area = ["City", "Stockholm Komun"]
function renderDropdownButton(title, menu_list, id) {
	let menuItems = [];
	menuItems = menu_list.map((name, index)=>{
		return <MenuItem key={index.toString()} eventKey={index.toString()}>{name}</MenuItem>;
	})
	return (
		<DropdownButton
		title={title}
		key={id}
		id={`dropdown-basic-${id}`}>
			{menuItems}
		</DropdownButton>
	);
}

const buttonsInstance = (
  <ButtonToolbar>
  {renderDropdownButton("Choose Metric Type",metric_type, "1")}
  {renderDropdownButton("Choose Time Period",period_time, "2")}
  {renderDropdownButton("Choose Area",area, "3")}
  </ButtonToolbar>
);

class metricFilter extends React.Component{
	render(){
		return(
			 buttonsInstance
		)
	}
}
// function mapStateToProps(state){
// 	return{
// 		state.metrics.metrics
// 	}
// }
// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({
// 		addToCart:addToCart,
// 		updateCart:updateCart
// 	}, dispatch)
// }
export default metricFilter; //connect(mapStateToProps)(metricFilter);

