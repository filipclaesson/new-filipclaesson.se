'use strict'

import {combineReducers} from 'redux';

// import reducers to be combined
import {metricsReducers} from './metricsReducers'
// import {booksReducers} from './booksReducers'
// import {cartReducers} from './cartReducers'



// export
export default combineReducers({
	metrics: metricsReducers
})