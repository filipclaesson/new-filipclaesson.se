import React from 'react'
import {Col, Button, Grid, MenuItem,ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import MetricList from './metricList'
// import MetricGraph from './metricGraph'
import {getDashboard} from '../../actions/dashboardActions';

class Dashboard extends React.Component{
  componentDidMount(){
    this.props.getDashboardItems(1)
  }
  render(){
		return(
      <Grid>
       <Row>
         <Col xs={12} md={12} key='1'>
         <h2>{this.props.dashboard[0].name}</h2>
         </Col>
         <Col xs={12} md={12} key='2'>
         <h6>{this.props.dashboard[0].description}</h6>
         </Col>
       </Row>
       <Row>
         <Col xs={12} md={4}>
         </Col>
         <Col xs={12} md={8}>
         </Col>
         </Row>
      </Grid>
		)
	}
}

function mapStateToProps(state){
  console.log(state)
  return {
    dashboard: state.dashboard.dashboard
  }
}


function mapDispatchToProps(dispatch){
 return bindActionCreators({
  getDashboard:getDashboard
 }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);





