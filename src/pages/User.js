import React, { Fragment, useContext } from 'react';

import { Context } from './../Context';

import { SubmitButton } from './../components/SubmitButton/index';

export const User = () => {
	const { removeAuth } = useContext(Context);

	return (
	<Fragment>
		<h1>User</h1>
		<SubmitButton onClick={removeAuth}>Sign out</SubmitButton>		
	</Fragment>
	);
}