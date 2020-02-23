import React, { Component } from 'react';
import { Link, Image } from './styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Category = ({
    cover = DEFAULT_IMAGE, route = '#', emoji = '?'
}) => (
    <Link to={route}>
        <Image src={cover}/>
        { emoji }
    </Link>
);