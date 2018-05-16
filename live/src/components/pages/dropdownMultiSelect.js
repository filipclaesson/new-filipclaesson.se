import React from 'react'
import {Col, Button, MenuItem, ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Select from 'react-select';
// import '../../../node_modules/react-select/dist/react-select.css';
// require('../../../node_modules/react-select/dist/react-select.css')

class dropdownMultiSelect extends React.Component{
	constructor(props) {
        super(props);
		console.log("this.props.dropdownListValues")
        console.log(this.props.dropdownListValues)
        this.state = {
        	selected: this.props.graphSettings["locations"]
        }

        this.handleClick.bind(this);
    }
	
	
	dropdownChooseMetricType = 0;

	handleClick = function(selected_values){
    	// cur_sel is the index of the current selected dropdown item
    	this.setState({ selected: selected_values})

    	//  this.props.graphSettings:  is mapped from state, it is the settings that is currently shown on the graph
    	//  this.props.type: aggregation, location etc.
      	var metaData = {
        metric: this.props.graphSettings
        ,id: "-90"
      	}
      	let value_array = selected_values.map((val)=>{
      		return val.value
      	})
      	metaData.metric[this.props.type] = value_array.join(",")

    	this.props.getCreateItemsData(metaData)

  	}

	render(){
		// const dropdowns = this.props.dropdownListValues.values.map((Item,i )=>{
		// 		return(
		// 			<MenuItem key={i} eventKey={i}>{Item}</MenuItem>
		// 		)
		//   	}
		// )
		var options = [
		  { value: 'one', label: 'One' },
		  { value: 'two', label: 'Two', clearableValue: false }
		];

		return(

			<ButtonToolbar>
			<Select
				name="hej"
				value={this.state.selected}
				multi={true}
				onChange={
					this.handleClick.bind(this)
				}
				id={`dropdown-basic-${1}`}
				options={this.props.dropdownListValues}>
			</Select>
			</ButtonToolbar>
		)
	}
}
function mapStateToProps(state){
	return{
		graphSettings: state.createDashboardItem.graphSettings
	}
}

export default connect(mapStateToProps)(dropdownMultiSelect);

