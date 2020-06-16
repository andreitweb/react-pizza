import {Catalog, Cart} from './../pages';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Catalog,
  },
  {
    path: '/cart',
    component: Cart
  }
];