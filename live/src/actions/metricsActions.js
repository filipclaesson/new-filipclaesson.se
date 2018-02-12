'use strict'
import axios from 'axios';

// Get Books
export function getMetrics(user_id){
	// return {
	// 	type:"GET_METRICS"
	// }
	return function(dispatch){
		axios.get("/metric/" + user_id)
		.then(function(response){
			dispatch({type:"GET_METRICS", payload:response.data})
		})
		.catch(function(err){
			dispatch({type:"GET_METRICS_REJECTED", payload:err})
		})
	}
}

// Delete Books
export function metricClick(metric){

	return function(dispatch){
		axios.post("/get_metric_data", metric)
		.then(function(response){
			dispatch(
				{type:"METRIC_CLICK"
				, payload:{current_metric_data:response.data,current_metric:metric}
			})
		})
		.catch(function(err){
			dispatch({type:"METRIC_CLICK_REJECTED", payload:err})
		})
	}
}

// // Update Books
// export function updateBooks(book){
// 	return {
// 		type:"UPDATE_BOOK",
// 		payload: book
// 	}
// }

