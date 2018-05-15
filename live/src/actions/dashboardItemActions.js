'use strict'
import axios from 'axios';


export function getDashboardItemsData(metaData){
	// return {
	// 	type:"GET_METRICS"
	// }

	return function(dispatch){
		axios.post("/get_metric_data", metaData.metric)
		.then(function(response){
			dispatch(
				{type:"GET_DASHBOARD_ITEM_DATA"
				, payload:{data:response.data, item_id: metaData.id}
			})
		})
		.catch(function(err){
			dispatch({type:"METRIC_CLICK_REJECTED", payload:err})
		})
	}
}
