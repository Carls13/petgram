import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
	const [isAuth, setAuth] = useState(() => {
		return window.sessionStorage.getItem('session');
	});

	const value = {
		isAuth,
		activateAuth: token => {
			setAuth(true);
			window.sessionStorage.setItem('session', token);
		},
		removeAuth: () => {
			setAuth(false);
			window.sessionStorage.removeItem('session', token);
		}
	}

	return (
	<Context.Provider value={value}>
		{children}
	</Context.Provider> 
	)
};

export default {
	Provider,
	Consumer: Context.Consumer
};