'use strict'
// Books Reducers
import initialState from './initialState.js';
export function metricsReducers(state=initialState.metrics, action){
	switch (action.type) {
		case "GET_METRICS":
		// console.log("detta läggs in i metrics: ")
		console.log("inne i GET_METRICS")
		console.log({...state})
		return {...state, metrics:[...action.payload]}
		break;
		// case "GET_METRIC_DATA":
		// console.log('Reducer: get metric data')
		// console.log(action.payload)
		// return {...state, current_metric_data:[...action.payload]}
		// break;
		case "METRIC_CLICK":
		// console.log("Reducer: metric clicked")
		// console.log(action.payload)
		return {...state, current_metric_data:action.payload.current_metric_data, current_metric:action.payload.current_metric}
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