import React from 'react'
import {Col, Button, Grid, MenuItem,ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import DashboardItemsList from './dashboardItemsList'
import {getDashboard} from '../../actions/dashboardActions';

class Dashboard extends React.Component{
  componentDidMount(){
    this.props.getDashboard(1)
  }
  render(){
		return(
      
      <Grid>
       <Row>
         <Col xs={12} md={12} key='1'>
         <h2>{this.props.name}</h2>
         </Col>
         <Col xs={12} md={12} key='2'>
         <h6>{this.props.description}</h6>
         </Col>
       </Row>
       <Row>
         <Col xs={12} md={12}>
         </Col>
         <Col xs={12} md={12}>
         <DashboardItemsList/>
         </Col>
         </Row>
      </Grid>
		)
	}
}

function mapStateToProps(state){
  return {
    name: state.dashboard.dashboards[0].name,
    // dashboard_items: state.dashboard.dashboards[0].dashboard_items,
    description: state.dashboard.dashboards[0].description
  }
}


function mapDispatchToProps(dispatch){
 return bindActionCreators({
  getDashboard:getDashboard
 }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);





