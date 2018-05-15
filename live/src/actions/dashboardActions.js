'use strict'
import axios from 'axios';

// Get Books
export function getDashboard(id){

	return function(dispatch){
		axios.get("/dashboard/" + id)
		.then(function(response){
			console.log("Get Dashboard from DB ...")
			dispatch({type:"GET_DASHBOARD", payload:response.data})
		})
		.catch(function(err){
			dispatch({type:"GET_DASHBOARD_REJECTED", payload:err})
		})
	}
}

// export function getDashboardItemData(metaData){
// 	// return {
// 	// 	type:"GET_METRICS"
// 	// }

// 	return function(dispatch){
// 		axios.post("/get_metric_data", metaData.metric)
// 		.then(function(response){
// 			dispatch(
// 				{type:"METRIC_CLICK"
// 				, payload:{current_metric_data:response.data, item_id: metaData.id}
// 			})
// 		})
// 		.catch(function(err){
// 			dispatch({type:"METRIC_CLICK_REJECTED", payload:err})
// 		})
// 	}
// }

// export function getDashboardItems(user_id){

// 	return function(dispatch){
// 		axios.get("/dashboard_item/" + user_id)
// 		.then(function(response){
// 			console.log("response.data")
// 			console.log(response.data)
// 			dispatch({type:"GET_DASHBOARD_ITEMS", payload:response.data})
// 		})
// 		.catch(function(err){
// 			dispatch({type:"GET_DASHBOARD_ITEMS_REJECTED", payload:err})
// 		})
// 	}
// }