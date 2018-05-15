'use strict'

import {combineReducers} from 'redux';

// import reducers to be combined
import {userReducers} from './userReducers'
import {dashboardReducers} from './dashboardReducers'
import {dashboardItemsReducers} from './dashboardItemsReducers'
import {createDashboardItemReducers} from './createDashboardItemReducers'




// export
export default combineReducers({
	// metrics: metricsReducers,
	user: userReducers,
	dashboard: dashboardReducers,
	itemData: dashboardItemsReducers,
	createDashboardItem: createDashboardItemReducers
})