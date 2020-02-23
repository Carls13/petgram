import React from 'react';

import { PhotoCardWithQuery } from './../containers/PhotoCardWithQuery';

import { Layout } from './../components/Layout/index';

export const Detail = ({ detailId }) => (
	<Layout title={`Foto ${detailId}`}>
		<PhotoCardWithQuery id={detailId} />
	</Layout>
);