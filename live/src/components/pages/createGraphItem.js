import React from 'react'
import {Col, Button, Grid, MenuItem,ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CreateItemFilter from './metricFilter'
// import MetricList from './metricList'
import GraphItem from './graphItem'
import {getCreateItemsData,createItem} from '../../actions/createDashboardItemActions';

class createMetric extends React.Component{
  constructor(props) {
    super(props);
    let metaData = {
      metric: this.props.graphSettings
      ,id: "-90"
    }
    this.state = {
      metaData:metaData,
      cur_sel: 1,
      filterSettingsAggregation: {
        keys:["sqm_sold_price","sqm_list_price"],
        values:["Sold Price/sqm", "List Price/sqm"]
      },
      filterSettingsLocation: {
        keys:["Gärdet","Östermalm","Vasastan","Kungsholmen","Södermalm"],
        values:["Gärdet","Östermalm","Vasastan","Kungsholmen","Södermalm"]
      }
    }
    
  }

  componentDidMount(){
    this.props.getCreateItemsData(this.state.metaData);
  }
  
  
  handleSubmit(){

    this.props.createItem(this.props.graphSettings)
  }
  
  render(){
    if(this.props.itemData.length > 0){
      // console.log("ITEM #" + " is NOT empty")
      return(this.RenderItemDataReceived());
    }else{
      // console.log("ITEM #" + " IS empty")
      return(this.renderEmpty());
    }
    
    /*let bgColor = this.state.color_black ? "black" : "white"*/
    
  }
  RenderItemDataReceived(){
    let settings=[{id: 8, key: "locations", value: "Gärdet,Östermalm,Vasastan,Kungsholmen,Södermalm", createdAt: "2018-05-06T09:27:29.125Z", updatedAt: "2018-05-06T09:27:29.125Z"}
      ,{id: 9, key: "group", value: "sold_month", createdAt: "2018-05-06T09:27:29.125Z", updatedAt: "2018-05-06T09:27:29.125Z"}
      ,{id: 10, key: "aggrigation_type", value: "AVG", createdAt: "2018-05-06T09:27:29.125Z", updatedAt: "2018-05-06T09:27:29.125Z"}
      ,{id: 11, key: "aggrigation", value: "sqm_sold_price", createdAt: "2018-05-06T09:27:29.125Z", updatedAt: "2018-05-06T09:27:29.125Z"}
      ,{id: 12, key: "sqm_low", value: "0", createdAt: "2018-05-06T09:27:29.125Z", updatedAt: "2018-05-06T09:27:29.125Z"}
      ,{id: 13, key: "sqm_high", value: "100", createdAt: "2018-05-06T09:27:29.125Z", updatedAt: "2018-05-06T09:27:29.125Z"}
      ,{id: 14, key: "range", value: "3 months", createdAt: "2018-05-06T09:27:29.125Z", updatedAt: "2018-05-06T09:27:29.125Z"}
    ]
    return(
      <Grid>
        <Row>
         <Col xs={12} md={12} key='1'>
         <h2>Create new graph</h2>
         </Col>
       </Row>
       <Row>
          <Col>
            <GraphItem settings={settings} itemData= {this.props.itemData[0].data} id = {this.props.id}/>
          </Col>
        </Row>
        <Row>
          <Col xs={3} md={3}>
            <CreateItemFilter 
            dropdownListValues={this.state.filterSettingsAggregation}
            getCreateItemsData={this.props.getCreateItemsData}
            type={"aggrigation"}
            />
          </Col>
          <Col xs={3} md={3}> 
            <CreateItemFilter 
            dropdownListValues={this.state.filterSettingsLocation}
            getCreateItemsData={this.props.getCreateItemsData}
            type={"locations"}
            />
          </Col>
          <Col xs={6} md={6}> 
          <Button
          onClick={this.handleSubmit.bind(this, this.props.id)}
          > Create Graph </Button>
          </Col>
        </Row>
        
        
      </Grid>
    )
  }

  renderEmpty(){
    return(<div></div>);
  }

}

function mapStateToProps(state){

  let this_item_data = []
  if (state.createDashboardItem.createItemData.length > -1){
    this_item_data = state.createDashboardItem.createItemData
  }

  return {
    user: state.user,
    itemData: this_item_data,
    graphSettings: state.createDashboardItem.graphSettings

  }
}


function mapDispatchToProps(dispatch){
 return bindActionCreators({
  getCreateItemsData:getCreateItemsData,
  createItem:createItem
 }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(createMetric);

