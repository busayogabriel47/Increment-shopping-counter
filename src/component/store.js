import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer/productReducer';

const initialState = {};

export default createStore(rootReducer, initialState, applyMiddleware(thunk));