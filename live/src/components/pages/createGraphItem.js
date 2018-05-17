import React from 'react'
import {Col, Button, Grid, MenuItem,ButtonToolbar, DropdownButton, ButtonGroup, Row, Well} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Dropdown from './dropdown'
import DropdownMultiSelect from './dropdownMultiSelect'
import MapView from './leafletMap'

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
      filterSettingsLocation:[
        {value:"Södermalm", label:"Södermalm"},
        {value:"Kungsholmen", label:"Kungsholmen"},
        {value:"Vasastan", label:"Vasastan"},
        {value:"Östermalm", label:"Östermalm"},
        {value:"Sundbyberg", label:"Sundbyberg"},
        {value:"Råsunda", label:"Råsunda"},
        {value:"Gärdet", label:"Gärdet"},
        {value:"Årsta", label:"Årsta"},
        {value:"Huvudsta", label:"Huvudsta"},
        {value:"Midsommarkransen", label:"Midsommarkransen"},
        {value:"Hammarbyhamnen", label:"Hammarbyhamnen"},
        {value:"Hammarbyhöjden", label:"Hammarbyhöjden"},
        {value:"Mariehäll", label:"Mariehäll"},
        {value:"Hagalund", label:"Hagalund"},
        {value:"Liljeholmen", label:"Liljeholmen"},
        {value:"Järva", label:"Järva"},
        {value:"Aspudden", label:"Aspudden"},
        {value:"Ursta", label:"Ursta"},
        {value:"Fruängen", label:"Fruängen"},
        {value:"Traneberg", label:"Traneberg"},
        {value:"Globen", label:"Globen"},
        {value:"Gamla Enskede", label:"Gamla Enskede"},
        {value:"Lilla Essingen", label:"Lilla Essingen"},
        {value:"Skytteholm", label:"Skytteholm"},
        {value:"Hjorthagen", label:"Hjorthagen"},
        {value:"Norrmalm", label:"Norrmalm"},
        {value:"Gröndal", label:"Gröndal"},
        {value:"Hägerstensåsen", label:"Hägerstensåsen"},
        {value:"Västberga", label:"Västberga"},
        {value:"Riksby", label:"Riksby"}
        ]
    }
    
  }

  componentDidMount(){
    console.log(window.innerWidth)

    this.props.getCreateItemsData(this.state.metaData);
  }
  
  
  handleSubmit(){
    this.props.graphSettings["aggrigation_type"]
    let aggrigation_type = this.props.graphSettings["aggrigation_type"].toLowerCase()
    aggrigation_type = aggrigation_type.charAt(0).toUpperCase() + aggrigation_type.slice(1)
    
    let aggrigation = this.props.graphSettings["aggrigation"]
    aggrigation = aggrigation.split("_").join(" ");

    let name = aggrigation_type + " " + aggrigation
    let description = "locations: " + this.props.graphSettings["locations"]
    let create_item_data = this.props.graphSettings
    create_item_data["name"] = name
    create_item_data["description"] = description
    console.log(name)
    console.log(description)

     // + this.props.graphSettings["locations"]

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
      <Grid fluid>
        <Row>
             <h2 className="col-md-6 col-md-offset-2" >Create new graph</h2>
        </Row>
        
        <Row>
          <Col xs={12} md={6} key='1'>
            <Row>
              <GraphItem settings={settings} itemData= {this.props.itemData[0].data} id = {this.props.id}/>
            </Row>

            <Row>
              <DropdownMultiSelect
                dropdownListValues={this.state.filterSettingsLocation}
                getCreateItemsData={this.props.getCreateItemsData}
                type={"locations"}>
              </DropdownMultiSelect>
            </Row>
            
            <Row>
              <Col xs={6} md={6}>
                <Dropdown
                dropdownListValues={this.state.filterSettingsAggregation}
                getCreateItemsData={this.props.getCreateItemsData}
                type={"aggrigation"}
                />
              </Col>
              <Col  xs={6} md={6}> 
                <Button
                  className="pull-right"
                  onClick={this.handleSubmit.bind(this, this.props.id)}
                > Create Graph </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} key='2' >
            <MapView 
              containerHeight="10%"
            />
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

