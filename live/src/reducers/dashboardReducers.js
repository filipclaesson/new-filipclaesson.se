'use strict'
// Books Reducers
import initialState from './initialState.js';
export function dashboardReducers(state=initialState.dashboard, action){
	switch (action.type) {
		case "GET_DASHBOARD":
		// console.log({...state})
		// console.log(action.payload)

		// let dashboard = action.payload[0]
		// console.log(dashboard)
		// dashboard.DashboardItems.map((item)=>{
		// 	console.log(item)
		// })
		
		return {...state, dashboards:action.payload}
		break;
		// case "GET_METRIC_DATA":
		// console.log('Reducer: get metric data')
		// console.log(action.payload)
		// return {...state, current_metric_data:[...action.payload]}
		// break;
		case "METRIC_CLICK":
		// console.log("Reducer: metric clicked")
		//console.log(action.payload)
		state.dashboards[0].DashboardItems[action.payload.item_id-1].current_metric_data = action.payload.current_metric_data
		// dashboards[0].DashboardItems[action.payload.item_id].current_metric_data: action.payload.current_metric_data
		return {...state}
		break;
		// case "POST_BOOK":
		// let books = state.books.concat(action.payload);
		// return {books:[...state.books, action.payload]}
		// break;
		// case "DELETE_BOOK":
		// const currentBookToDelete = [...state.books];
		// const indexToDelete = currentBookToDelete.findIndex(
		// 	function(book){
		// 		return book.id === action.payload.id;
		// 	})
		// return {books:[...currentBookToDelete.slice(0,indexToDelete),
		// 	...currentBookToDelete.slice(indexToDelete + 1)]}
		// break;
		
		// case "UPDATE_BOOK":
		// const currentBookToUpdate = [...state.books];
		// const indexToUpdate = currentBookToUpdate.findIndex(
		// 	function(book){
		// 		return book.id === action.payload.id;
		// 	}
		// )
		// const newBookToUpdate = {...currentBookToUpdate[indexToUpdate],
		// 	title: action.payload.title
		// }

		// return {books:[...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
		// 	...currentBookToUpdate.slice(indexToUpdate + 1)]}
		// break;

	} 
	return state
}


			// let metric = action.payload;
			// let currentMetricToGetData = [...state.metrics]
			// console.log(metric)
			// console.log(currentMetricToGetData)
			// const index_to_get = currentMetricToGetData.findIndex(
			// 	function(metric){
			// 		return metric.id === action.payload.id;
			// 	})