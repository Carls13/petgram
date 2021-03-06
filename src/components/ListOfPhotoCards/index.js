import React from 'react'
import { PhotoCard } from '../PhotoCard';
import { withPhotos } from './../../hoc/withPhotos';

const ListOfPhotoCardsComponents = ({ data: { photos = [] }} = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)}
    </ul>
  )
};

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponents);