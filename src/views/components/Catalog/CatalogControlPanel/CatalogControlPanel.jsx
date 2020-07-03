import React from 'react';

import Sort from './../CatalogSort/CatalogSort';
import Categories from '../CatalogCategories/CatalogCategories';

const CatalogControlPanel = () => {
	return (
		<div className="control-panel">
			<Categories/>
			<Sort/>
		</div>
	);
}

export default CatalogControlPanel;