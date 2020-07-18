import { combineReducers } from "redux";

import catalogReducers from './Catalog/reducers';

export default combineReducers({
	...catalogReducers
});