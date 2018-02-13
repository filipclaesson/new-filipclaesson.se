import React from 'react'
import {Col, Button, Grid, MenuItem,ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import MetricList from './metricList'
import MetricGraph from './metricGraph'
import {getApartments} from '../../actions/apartmentsActions';

class ViewMetric extends React.Component{

  render(){
		return(
      <Grid>
       <Row>
         <Col xs={12} md={12} key='1'>
         <h2> View Metric </h2>
         </Col>
       </Row>
       <Row>
         <Col xs={12} md={4}>
          <MetricList />
         </Col>
         <Col xs={12} md={8}>
          <MetricGraph />
         </Col>
         </Row>
      </Grid>
		)
	}
}

function mapStateToProps(state){
  return {
    metrics: state.metrics.metrics
  }
}


function mapDispatchToProps(dispatch){
 return bindActionCreators({
  getApartments:getApartments
 }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewMetric);





