import {CHANGE_FILTER, COMPONENT_KEY} from './constants';

const initialStore = {
	items: [
		{id: 'all', title: 'Все пиццы', active: true},
		{id: 'meat', title: 'Мясные', active: false},
		{id: 'vegetarian', title: 'Вегетарианские', active: false},
		{id: 'grill', title: 'Гриль', active: false},
		{id: 'spicy', title: 'Острые', active: false},
		{id: 'closed', title: 'Закрытые', active: false},
	]
}

const filterReducer = (store = initialStore, { type, payload }) => {
	switch (type) {
		case CHANGE_FILTER:
			return {
				...store,
				active: payload
			}
		default:
			return store;
	}
}

export default {
	[COMPONENT_KEY]: filterReducer
}