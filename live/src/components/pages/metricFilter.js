import React from 'react'
import {Col, Button, MenuItem, ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


// const metric_type = ["Sold Price/sqm", "List Price/sqm", "Price increase %/sqm"]
// const period_time = ["1 Week", "1 Month", "3 Month", "6 Month", "1 Year"]
// const area = ["City", "Stockholm Komun"]




class CreateItemFilter extends React.Component{
	constructor(props) {
        super(props);

        this.state = {
        	cur_sel: 0
        }
        console.log("this.props")
        console.log(this.props)
        this.handleClick.bind(this);
    }


	
	
	dropdownChooseMetricType = 0;

	handleClick = function(evt){
    	// cur_sel is the index of the current selected dropdown item
    	this.setState({ cur_sel: evt})

    	//  this.props.graphSettings:  is mapped from state, it is the settings that is currently shown on the graph
    	//  this.props.type: aggregation, location etc.
      	var metaData = {
        metric: this.props.graphSettings
        ,id: "-90"
      	}
      	metaData.metric[this.props.type] = this.props.dropdownListValues.keys[evt]

    	this.props.getCreateItemsData(metaData)

  	}



	render(){
		const dropdowns = this.props.dropdownListValues.values.map((Item,i )=>{
				return(
					<MenuItem key={i} eventKey={i}>{Item}</MenuItem>
				)
		  	}
		)

		return(

			<ButtonToolbar>
			<DropdownButton
				bsStyle="default"
				title={this.props.dropdownListValues.values[this.state.cur_sel]}
				key={1}
				onSelect={
					this.handleClick.bind(this)
				}
				id={`dropdown-basic-${1}`}>
				{dropdowns}

			</DropdownButton>
			</ButtonToolbar>
		)
	}
}
function mapStateToProps(state){
	return{
		graphSettings: state.createDashboardItem.graphSettings
	}
}
// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({
// 		addToCart:addToCart,
// 		updateCart:updateCart
// 	}, dispatch)
// }
export default connect(mapStateToProps)(CreateItemFilter);

