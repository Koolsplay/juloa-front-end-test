import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import ProductList from '@containers/product-list'
import FullProduct from '@containers/full-product'
import '@style/main.scss'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
		<Router history={history}>
			<Route path="/" component={ProductList} />
			<Route path={"/product(/:id/:title)"} component={FullProduct} />
		</Router>
    </Provider>,
    document.getElementById('app')
);