import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Spinner } from './../components/Spinner/index';
import { FavsList } from './../components/FavsList/index';

const GET_FAVS = gql`
	query getFavs {
		favs {
			id
			categoryId
			src
			likes
			userId
		}
	}
`;

const renderProp = ({ loading, error, data }) => {
	if (loading) return <Spinner/>;
	if (error) return <p>Error!</p>;

	const { favs } = data;
	return <FavsList favs={favs}/>
}

export const FavsWithQuery = () => (
	<Query query={GET_FAVS} fetchPolicy='network-only'>
		{renderProp}
	</Query>
);