import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import About from './routes/About';
import Worker from './routes/Worker';
import Client from './routes/Client';

ReactDOM.render(
	<Router>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/about' element={<About />} />
			<Route path='/worker' element={<Worker />} />
			<Route path='/client' element={<Client />} />
		</Routes>
	</Router>,
	document.getElementById('root')
);
