import { useState } from 'react';
import Home from './pages/Home';
import ScrollObserver from './utils/scroll-observer';

function App() {
	return (
		<ScrollObserver>
			<Home />
		</ScrollObserver>
	);
}

export default App;
