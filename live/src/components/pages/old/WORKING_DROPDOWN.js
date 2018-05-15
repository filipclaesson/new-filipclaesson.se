import React from 'react'
import {Col, Button, MenuItem, ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


// const metric_type = ["Sold Price/sqm", "List Price/sqm", "Price increase %/sqm"]
// const period_time = ["1 Week", "1 Month", "3 Month", "6 Month", "1 Year"]
// const area = ["City", "Stockholm Komun"]




class metricFilter extends React.Component{
	constructor(props) {
        super(props);

        this.state = {
        	val: ["Sold Price/sqm", "List Price/sqm", "Price increase %/sqm"]
        	, cur_sel: 1
        }

        this.handleClick.bind(this);
    }


	
	
	dropdownChooseMetricType = 0;

	handleClick = function(evt){
    	console.log("evt")
    	console.log(evt)
    	console.log(this.state)
    	this.setState({ cur_sel: evt})
  	}

	render(){
		return(

			<ButtonToolbar>
			<DropdownButton
				bsStyle="default"
				title={this.state.val[this.state.cur_sel]}
				key={1}
				onSelect={
					this.handleClick.bind(this)
				}
				id={`dropdown-basic-${1}`}>
				<MenuItem eventKey="0">{this.state.val[0]}</MenuItem>
				<MenuItem eventKey="1">{this.state.val[1]}</MenuItem>
				<MenuItem eventKey="2">{this.state.val[2]}>
				Active Item
				</MenuItem>
				<MenuItem divider />
				<MenuItem eventKey="4">Separated link</MenuItem>
			</DropdownButton>
			</ButtonToolbar>
		)
	}
}
function mapStateToProps(state){
	console.log("HEJ")
	return{
		
	}
}
// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({
// 		addToCart:addToCart,
// 		updateCart:updateCart
// 	}, dispatch)
// }
export default connect(mapStateToProps)(metricFilter);

