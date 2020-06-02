import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';

import { Counter } from '../features/counter/Counter';

export default {
  title: 'Counter',
  component: Counter,
};

export const DefaultCounter = () => (
	<Provider store={store}>
		<Counter/>
	</Provider>
);
