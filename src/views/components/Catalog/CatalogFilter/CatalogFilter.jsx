import React from 'react';
import {connect} from 'react-redux';

import {selectFilterItemSuper} from '../../../redux/Catalog/CatalogFilter/selectors';

const CatalogFilter = ( {items} ) => {
	return (
		<div className="categories">
			<ul>
				{items.map( ({id, title, active}) => (
					<li key={id} className={active ? 'active': ''}>{title}</li>
				))}
			</ul>
		</div>
	);
}

export default connect(
	(store) => {
		return {items: selectFilterItemSuper(store)};
	}
)(CatalogFilter);