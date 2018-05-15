'use strict'
// Books Reducers
import initialState from './initialState.js';
export function createDashboardItemReducers(state=initialState.createItemData, action){
	switch (action.type) {
		


		case "GET_DASHBOARD_ITEM_DATA_FOR_CREATE":
		// console.log("FROM DASHBOARD REDUCER: ")
		// console.log(action.payload)
		return {createItemData:[action.payload], graphSettings:action.payload.settings}
		break;
		case "CREATE_DASHBOARD_ITEM":
		console.log("CREATE_DASHBOARD_ITEM")
		console.log(action.payload)
		return state
		break;
		// case "POST_DASHBOARD_ITEM":
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