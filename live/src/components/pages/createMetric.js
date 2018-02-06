import React from 'react'
import {Col, Button, Grid, MenuItem,ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import MetricsFilter from './metricFilter'
import MetricList from './metricList'


class createMetric extends React.Component{
	render(){
		return(
      <Grid>
       <Row>
         <Col xs={12} md={12} key='1'>
         <h2> Create Metric </h2>
         </Col>
       </Row>
       <Row>
         <Col xs={12} md={8}>
          <MetricsFilter />
         </Col>
         <Col xs={12} md={4}>
          <MetricList />
         </Col>
         </Row>
      </Grid>
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
export default createMetric; //connect(mapStateToProps)(metricFilter);

