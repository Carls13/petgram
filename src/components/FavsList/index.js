import React from 'react';

import { Grid, Image, Link } from './styles';

export const FavsList = ({ favs = [] }) => {
	return (
	<Grid>
		{
			favs.map(({ id, src }) => {
				return (
					<Link key={id} to={`/detail/${id}`} >
						<Image src={src}/>				
					</Link>
				)
			})
		}
	</Grid>
	)
};