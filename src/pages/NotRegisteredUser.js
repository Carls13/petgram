import React, { Fragment, useContext } from 'react';

import { Context } from './../Context';
import { UserForm } from './../components/UserForm/index';

import { RegisterMutation } from './../containers/RegisterMutation';
import { LoginMutation } from './../containers/LoginMutation';

export const NotRegisteredUser = () => {
	const { activateAuth } = useContext(Context)
	return (
		<Fragment>
			<RegisterMutation>
				{
					(register, { data, loading, error }) =>{ 
						const onSubmit = ({ email, password }) => {
							const input = { email, password };
							const variables = { input };

							register({ variables }).then(({ data }) => {
								const { signup } = data;
								activateAuth(signup)	
							})
						}

						const errorMsg = error && 'User already exists. Please, try using another one.';
						return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Sign up"/>
					}
				}
			</RegisterMutation>
			<LoginMutation>
				{
					(login, { data, loading, error }) => {
						const onSubmit = ({ email, password }) => {
							const input = { email, password };
							const variables = { input };

							login({ variables }).then(({ data }) => {
								const { login } = data;
								activateAuth(login)	
							})
						}

						const errorMsg = error && 'Invalid credentials. Try again.';
						return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Sign in"/>
					}
				}
			</LoginMutation>
		</Fragment>
					
)};