'use strict'

import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {getMetrics} from '../../actions/metricsActions';
import {Grid, Col, Row, Button} from 'react-bootstrap'
import MetricsItem from './metricItem'
// import MetricFilter from './metricFilter';
// import Cart from './cart'

class MetricsList extends React.Component{
	componentDidMount(){
		this.props.getMetrics("2")
	}

	render(){
		const MetricsList = this.props.metrics.map((metricItem)=>{
				return(
					<Col xs={12} md={12} key={metricItem.id}>
						<MetricsItem 
						id ={metricItem.id}
						name ={metricItem.name}
						description ={metricItem.description}/>
					</Col>
				)
		  	}
		)
		return(

			<Grid>
				<Row>
					<Col xs={12} sm={6}>
					</Col>
					{MetricsList}
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
 	getMetrics:getMetrics
 }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(MetricsList);


