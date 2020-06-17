import React from 'react';

import PizzaLogo from './../../../assets/img/pizza-logo.svg';

const HeaderLogo = () => {
	return (
		<div className="logo">
			<img width="38" src={PizzaLogo} alt="Pizza logo"/>
			<div>
				<h1>React Pizza</h1>
				<p>самая вкусная пицца во вселенной</p>
			</div>
		</div>
	);
}

export default HeaderLogo;