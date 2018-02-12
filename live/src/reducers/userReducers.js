'use strict'
// Books Reducers
import initialState from './initialState.js';
export function userReducers(state = initialState.user, action){

	switch (action.type) {
		case "GET_USER":
		return {...state, ...action.payload}
		break;


	} 
	return state
}