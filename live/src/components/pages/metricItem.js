import React from 'react'
import {Col, Row, Well, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {metricClick} from '../../actions/metricsActions';
import {getDashboardItemData} from '../../actions/dashboardActions';


// import {addToCart, updateCart} from '../../actions/cartActions';

class MetricItem extends React.Component{
  componentDidMount(){
  	let metaData = {
  		locations:"Södermalm",
  		group: "sold_week"
  	}
    this.props.getDashboardItemData(metaData)
  }



  	handleSubmit(id){
  		/*this.setState({color_black: !this.state.color_black})*/
		const currentMetrics = this.props.metrics;
		let currentMetricIndex = currentMetrics.findIndex((metrics)=>{
			console.log(metrics)
			return metrics.id === id;
		})
	    var metric = {
			locations:this.props.metrics[currentMetricIndex].locations,
			group:this.props.metrics[currentMetricIndex].group,
			aggrigation_type:this.props.metrics[currentMetricIndex].aggrigation_type,
			aggrigation:this.props.metrics[currentMetricIndex].aggrigation,
			low_sqm:this.props.metrics[currentMetricIndex].low_sqm,
			high_sqm:this.props.metrics[currentMetricIndex].high_sqm,
			low_date:this.props.metrics[currentMetricIndex].low_date,
			high_date:this.props.metrics[currentMetricIndex].high_date
	    }
		this.props.metricClick(metric);
	}
	render(){
		/*let bgColor = this.state.color_black ? "black" : "white"*/
		console.log("METRIC PROPS")
		console.log(this.props)
		return(
			<Well>
				<Row>
					<Col onClick={this.handleSubmit.bind(this, this.props.id)}  xs={12}>
						<h6>{this.props.name}</h6>
						<p>{this.props.description}</p>
					</Col>
				</Row>
			</Well>
		)
	}
}

function mapStateToProps(state){

	return {
		user: state.user,
		settings: []
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		metricClick:metricClick,
		getDashboardItemData:getDashboardItemData
	}, dispatch)
}
// function mapDispatchToProps(dispatch){
//  return bindActionCreators({
//  	metricClick:metricClick
//  }, dispatch)
// }
export default connect(mapStateToProps, mapDispatchToProps)(MetricItem);