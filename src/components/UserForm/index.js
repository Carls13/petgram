import React, { Fragment } from 'react';

import { useInputValue } from './../../hooks/useInputValue';

import { Form, Input, Title, ErrorSpan } from './styles';
import { SubmitButton } from './../SubmitButton/index';

export const UserForm = ({ disabled, onSubmit, title, error }) => {
	const email = useInputValue('');
	const password = useInputValue('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ 
			email: email.value, 
			password: password.value
		});
	}

	return ( 
		<Fragment>
			<Title>{title}</Title>
			<Form disabled={disabled} onSubmit={handleSubmit}>
				<Input disabled={disabled} 
					placeholder="Email" 
					type="email"
					{...email} />
				<Input disabled={disabled} 
					placeholder="Password" 
					type="password"
					{...password} />
				<SubmitButton disabled={disabled}>{title}</SubmitButton>
			</Form>
			{ error && <ErrorSpan>{error}</ErrorSpan>}
		</Fragment>
		)
};