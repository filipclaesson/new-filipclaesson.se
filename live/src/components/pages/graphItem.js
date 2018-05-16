import React from 'react'
import {Col, Button, Grid, Image, MenuItem,ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getApartments} from '../../actions/apartmentsActions';


var LineChart = require("react-chartjs").Line;



class GraphItem extends React.Component{

  componentDidMount(){


  }
  render(){

    return(this.renderGraph())
  
  }

  renderGraph(){

	let group_id = this.props.settings.findIndex((setting)=>{
		return (setting.key == 'group');
	})
    let labels = this.props.itemData.map((data_entry)=>{
      return new Date(data_entry[this.props.settings[group_id].value]).toISOString().slice(0,10);
    })

    let data = this.props.itemData.map((data_entry)=>{
      return Number(data_entry.aggrigation).toFixed(0);
    })
    // console.log(labels)
    let chartData = {

  labels: labels,
  datasets: [
    {
      // label: "My First dataset",
      fillColor: "rgba(242, 242, 240,0.1)",
      backgroundColor: "rgba(255, 99, 132, 1)",
      strokeColor: "rgba(79, 183, 131,1)",
      // borderWidth: 100,
      // pointColor: "rgba(220,220,220,1)",
      // pointStrokeColor: "#fff",
      // pointHighlightFill: "#fff",
      // pointHighlightStroke: "rgba(220,220,220,1)",
      data: data
    }
    // dataseries 2
    // ,
    // {
    //   label: "My Second dataset",
    //   fillColor: "rgba(151,187,205,0.2)",
    //   strokeColor: "rgba(151,187,205,1)",
    //   pointColor: "rgba(151,187,205,1)",
    //   pointStrokeColor: "#fff",
    //   pointHighlightFill: "#fff",
    //   pointHighlightStroke: "rgba(151,187,205,1)",
    //   data: [28, 48, 40, 19, 86, 27, 90]
    // }
  ]
};
let chartOptions = {

  ///Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines : true,


  //String - Colour of the grid lines
  scaleGridLineColor : "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  scaleGridLineWidth : 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,

  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: false,

  //Boolean - Whether the line is curved between points
  bezierCurve : false,

  //Number - Tension of the bezier curve between points
  bezierCurveTension : 0.4,

  //Boolean - Whether to show a dot for each point
  pointDot : false,

  //Number - Radius of each point dot in pixels
  pointDotRadius : 4,

  //Number - Pixel width of point dot stroke
  pointDotStrokeWidth : 1,

  //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
  pointHitDetectionRadius : 20,

  //Boolean - Whether to show a stroke for datasets
  datasetStroke : true,

  //Number - Pixel width of dataset stroke
  datasetStrokeWidth : 2,

  //Boolean - Whether to fill the dataset with a colour
  datasetFill : true,
  responsive : true,
  //String - A legend template
  legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"


};
		return(
      <Grid>
       <Row>
         <Col xs={12} md={12} key='1'>
         </Col>
       </Row>
       <Row>
       <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
       </Row>
      </Grid>
		)
	}
}

function mapStateToProps(state, ownProps){
	// Get current graphs id
  // console.log("graph #" + ownProps.id + ", own properties:")
  	// let dashboard_items = state.dashboard.dashboards[0].DashboardItems
	// let itemIndex = dashboard_items.findIndex((item)=>{
	// 	return item.id === ownProps.id;
	// })
	// let dashboard_item = state.dashboard.dashboards[0].DashboardItems[itemIndex]

	return {
		
	}
}


function mapDispatchToProps(dispatch){
 return bindActionCreators({
  getApartments:getApartments
 }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(GraphItem);
