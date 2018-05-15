'use strict'
import axios from 'axios';


export function getCreateItemsData(metaData){
	// return {
	// 	type:"GET_METRICS"
	// }

	return function(dispatch){
		axios.post("/get_metric_data", metaData.metric)
		.then(function(response){
			dispatch(
				{type:"GET_DASHBOARD_ITEM_DATA_FOR_CREATE"
				, payload:{data:response.data, settings: metaData.metric}
			})
		})
		.catch(function(err){
			dispatch({type:"GET_DASHBOARD_ITEM_DATA_FOR_CREATE_REJECTED", payload:err})
		})
	}
}



export function createItem(metaData){
	// return {
	// 	type:"GET_METRICS"
	// }

	return function(dispatch){
		axios.post("/create_dashboard_item", metaData)
		.then(function(response){
			dispatch(
				{type:"CREATE_DASHBOARD_ITEM"
				, payload:{data:response.data, settings: metaData}
			})
		})
		.catch(function(err){
			dispatch({type:"CREATE_DASHBOARD_ITEM_REJECTED", payload:err})
		})
	}
}


