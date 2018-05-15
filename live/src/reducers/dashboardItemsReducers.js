'use strict'
// Books Reducers
import initialState from './initialState.js';
export function dashboardItemsReducers(state=initialState.itemData, action){
	switch (action.type) {
		case "GET_DASHBOARD_ITEM_DATA":

		return {
			createItemData:state.createItemData
			,dashboardItemsData:[...state.dashboardItemsData,action.payload]
		}
		break;
		
	} 
	return state
}
