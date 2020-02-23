import React from 'react';

import { Layout } from './../components/Layout/index';
import { FavsWithQuery } from './../containers/GetFavorites';

export const Favs = () => (
	<Layout title="Tus favoritos"
		subtitle="Aquí puedes encontrar tus favoritos">
		<FavsWithQuery/>	
	</Layout>
);