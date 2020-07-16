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

	it('should render with no crushing', function () {
		const component = renderer.create(
			<MemoryRouter>
				<HeaderCart {...props}/>
			</MemoryRouter>
		);
		const tree = component.toJSON();

		expect(component).toMatchSnapshot();
	});

	it('HeaderCart should contains cost from properties', () => {
		const component = renderer.create(
			<MemoryRouter>
				<HeaderCart {...props}/>
			</MemoryRouter>
		);
		const spanCost = component.root.findAllByType('span')[0];

		expect(spanCost.children[0] + ' ₽').toBe(props.cost + ' ₽');
	});

	it('HeaderCart should contains count from properties', () => {
		const component = renderer.create(
			<MemoryRouter>
				<HeaderCart {...props}/>
			</MemoryRouter>
		);
		const spanCount = component.root.findAllByType('span')[1];

		//expect count props
		expect(Number(spanCount.children[0])).toBe(props.count);
	});

});
