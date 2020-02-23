import React from 'react';

import { ListOfCategories } from './../components/ListOfCategories/index';
import { ListOfPhotoCards } from './../components/ListOfPhotoCards/index';

import { Layout } from './../components/Layout/index';

export const Home = ({ id }) => {
	return (
		<Layout 
			title="Tu app de fotos de mascotas"
			subtitle="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
			>
    		<ListOfCategories/>
    		<ListOfPhotoCards categoryId={id}/>
    	</Layout>
	)
};