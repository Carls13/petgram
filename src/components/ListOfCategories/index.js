import React, { Fragment, useState, useEffect } from 'react';
import { Category } from './../Category/index';
import { List, Item } from './styles';
import { categories as mockCategories } from './../../../api/db.json';
import { Spinner } from './../Spinner/index';

function useCategoriesData() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(function(){
        setTimeout(function(){
            setLoading(false);
            setCategories(mockCategories);
        }, 1000)
    }, []);

    return { categories, loading }
}

export const ListOfCategories = () => {
    const [showFixed, setShowFixed] = useState(false);
    
    const { categories, loading } = useCategoriesData()

    useEffect(function () {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200;
            showFixed != newShowFixed && setShowFixed(newShowFixed);
        }

        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll);
    }, [showFixed]);

    const renderList = (fixed) => (
        <List fixed={fixed}>            
                {
                    loading ? <Spinner/> :
                    categories.map((category, i) => 
                    {
                        return <Item key={category.id}>
                        <Category route={`/pet/${category.id}`} {...category}/>
                    </Item>}
                    )
            }
        </List>
    )

    return (
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    );
}