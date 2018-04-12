'use strict'
import axios from 'axios';

// Get Books
export function getDashboard(id){

	return function(dispatch){
		axios.get("/dashboard/" + id)
		.then(function(response){
			console.log("response.data")
			console.log(response.data)
			dispatch({type:"GET_DASHBOARD", payload:response.data})
		})
		.catch(function(err){
			dispatch({type:"GET_DASHBOARD_REJECTED", payload:err})
		})
	}
}

export function getDashboardItems(user_id){

	return function(dispatch){
		axios.get("/dashboard_item/" + user_id)
		.then(function(response){
			console.log("response.data")
			console.log(response.data)
			dispatch({type:"GET_DASHBOARD_ITEMS", payload:response.data})
		})
		.catch(function(err){
			dispatch({type:"GET_DASHBOARD_ITEMS_REJECTED", payload:err})
		})
	}
}