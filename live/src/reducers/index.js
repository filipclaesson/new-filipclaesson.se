'use strict'

import {combineReducers} from 'redux';

// import reducers to be combined
// import {metricsReducers} from './metricsReducers'
import {userReducers} from './userReducers'
import {dashboardReducers} from './dashboardReducers'
// import {booksReducers} from './booksReducers'
// import {cartReducers} from './cartReducers'



// export
export default combineReducers({
	// metrics: metricsReducers,
	user: userReducers,
	dashboard: dashboardReducers,
})