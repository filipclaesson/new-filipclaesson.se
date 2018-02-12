'use strict'
import axios from 'axios';

// Get Books
export function getApartments(metric){

	return function(dispatch){
		axios.post("/apartments", metric)
		.then(function(response){
			dispatch({type:"GET_METRIC_DATA", payload:response.data})
		})
		.catch(function(err){
			dispatch({type:"GET_APARTMENTS_REJECTED", payload:err})
		})
	}
}