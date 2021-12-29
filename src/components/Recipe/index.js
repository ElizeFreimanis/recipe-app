import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Recipe({ title, img, link }) {
    const recipeID = link.substr(38, 32);

    return (
        <Link className='recipe-ctn' to={recipeID}>
            <img src={img} alt='food-pic' className='food-img' />
            <div className='recipe-info'>
                <h1>{title}</h1>
            </div>
        </Link>
    );
}

export default Recipe;
