import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import HeaderCart from './HeaderCart';

describe('Header Cart test', () => {
	let props;

	beforeAll(() => {
		props = {
			cost: 520,
			count: 3,
		};
	});

	it('should render', function () {
		const component = renderer.create(
			<MemoryRouter>
				<HeaderCart {...props}/>
			</MemoryRouter>
		);
		const tree = component.toJSON();

		expect(component).toMatchSnapshot();
	});

	it('HeaderCart should contains numbers from properties', () => {
		const component = renderer.create(
			<MemoryRouter>
				<HeaderCart {...props}/>
			</MemoryRouter>
		);
		console.log(component.root.findByProps(props.count));
		expect(component.root.findByProps(props.count));
	});

});
