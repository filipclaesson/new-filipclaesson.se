'use strict'
import axios from 'axios';

// Get Books
export function getMetrics(id){
	// return {
	// 	type:"GET_METRICS"
	// }
	return function(dispatch){
		axios.get("/metric/" + id)
		.then(function(response){
			console.log(response.data)
			dispatch({type:"GET_METRICS", payload:response.data})
		})
		.catch(function(err){
			dispatch({type:"GET_METRICS_REJECTED", payload:err})
		})
	}
}

// // Post Books
// export function postBooks(book){
// 	return function(dispatch){
// 		axios.post("/books", book)
// 		.then(function(response){
// 			dispatch({type:"POST_BOOK", payload:response.data})
// 		})
// 		.catch(function(err){
// 			dispatch({type:"POST_BOOK_REJECTED", payload:"There was an error"})
// 		})
// 	}
// }

// // Delete Books
// export function deleteBooks(id){
// 	return {
// 		type:"DELETE_BOOK",
// 		payload: id
// 	}
// }

// // Update Books
// export function updateBooks(book){
// 	return {
// 		type:"UPDATE_BOOK",
// 		payload: book
// 	}
// }