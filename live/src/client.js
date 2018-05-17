'use strict'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
// REACT ROUTER
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
// import combined reducers
import reducers from './reducers/index';


const middleware = applyMiddleware(thunk,logger);
// STEP 1 Create a store and subscribe for any changes
const store = createStore(reducers, middleware);


import createGraphItem from './components/pages/createGraphItem';
import Dashboard from './components/pages/dashboard';
import Main from './main'

const Routes = (
	<Provider store={store}>
		<div>
			<Router history={browserHistory}>
				<Route path="/" component={Main}>
					<IndexRoute component={Dashboard}/>
					<Route path="/create_metric" component={createGraphItem} />
				</Route>
			</Router>
		</div>
	</Provider>
)
render(
	Routes, document.getElementById('app')
);
