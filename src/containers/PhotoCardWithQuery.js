import React from 'react';

import { PhotoCard } from './../components/PhotoCard/index';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Spinner } from './../components/Spinner/index';

const GET_SINGLE_PHOTO = gql`
	query getSinglePhoto($id: ID!) {
		photo(id:$id){
			id
			categoryId
			src
			likes
			userId
			liked
		}
	}	
`;

const renderProp = ({ loading, error, data}) => {
			if (error) return <p>{error}</p>;
			if (data) {
				const { photo } = data;
				return <PhotoCard {...photo}/>
			}  else {
				return <Spinner/>
			}
		};

export const PhotoCardWithQuery = ({ id }) => (
	<Query query={GET_SINGLE_PHOTO} variables={{ id }}>
	{ renderProp }
	</Query>
);