import React from 'react';

import {CatalogControlPanel, CatalogList} from './../../components/Catalog';
import Title from './../../components/Title/Title';

const Catalog = () => {
  return (
    <div className="container">
      <CatalogControlPanel/>
      <Title title="Все"/>
      <CatalogList/>
    </div>
  );
}

export default Catalog;