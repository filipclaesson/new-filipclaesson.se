import React from 'react'
import {Col, Button, Grid, Image, MenuItem,ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getApartments} from '../../actions/apartmentsActions';


class MetricGraph extends React.Component{
  render(){
    console.log(this.props.current_metric.id)
    if (this.props.current_metric.aggrigation){
      return(this.renderGraph());
    }else{
      return(this.renderEmpty());
    }
  }

  renderEmpty(){
    return(<div></div>);
  }
  renderGraph(){
		return(
      <Grid>
       <Row>
         <Col xs={12} md={12} key='1'>
         <h4> Locations: {this.props.current_metric.locations} </h4>
         </Col>
       </Row>
       <Row>
       <h1> THIS IS A GRAPH </h1>
       </Row>
      </Grid>
		)
	}
}

function mapStateToProps(state){
  return {
    metrics: state.metrics.metrics,
    current_metric: state.metrics.current_metric    
  }
}


function mapDispatchToProps(dispatch){
 return bindActionCreators({
  getApartments:getApartments
 }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(MetricGraph);
