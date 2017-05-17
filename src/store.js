import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

// import reducers from './index';

import queryReducer from './reducers/queryReducer';

const middleware = applyMiddleware(logger,promise(),thunk);
const store = createStore(queryReducer,composeWithDevTools(middleware));

export default store
