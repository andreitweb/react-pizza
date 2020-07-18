import {createSelector} from 'reselect';
import {COMPONENT_KEY} from './constants';

const selectFilterItem = (store) => store[COMPONENT_KEY].items;

export const selectFilterItemSuper = createSelector(
	[selectFilterItem],
	(items) => items
)