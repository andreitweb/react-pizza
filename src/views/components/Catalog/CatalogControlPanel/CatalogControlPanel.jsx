import React from 'react';

import Sort from './../CatalogSort/CatalogSort';
import Filter from '../CatalogFilter/CatalogFilter';

const CatalogControlPanel = () => {
	return (
		<div className="control-panel">
			<Filter/>
			<Sort/>
		</div>
	);
}

export default CatalogControlPanel;