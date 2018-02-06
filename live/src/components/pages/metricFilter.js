import React from 'react'
import {Col, Button, MenuItem,ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

function renderDropdownButton(title, i) {
  return (
    <DropdownButton
      title={title}
      key={i}
      id={`dropdown-basic-${i}`}
    >
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>
        Active Item
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  );
}

const buttonsInstance = (
  <ButtonToolbar>{renderDropdownButton("filter",1)}</ButtonToolbar>
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

