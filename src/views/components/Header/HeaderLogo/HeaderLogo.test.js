import React from 'react';
import renderer from 'react-test-renderer';

import HeaderLogo from './HeaderLogo';

it('should render with no crushing', function () {
	const component = renderer.create(<HeaderLogo/>)
	const tree = component.toJSON();
	expect(component).toMatchSnapshot();
});