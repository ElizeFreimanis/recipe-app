import './styles.css';
import { useState } from 'react';

import Recipe from '../../components/Recipe';
import Start from '../Start';
import Form from '../../components/Form';

function Home() {
    const [recipes, setRecipes] = useState([]);

    return (
        <div className='home'>
            <h1>Find your favourite diet recipes</h1>
            <Form setRecipes={setRecipes} />
            <div className='recipe-container'>
                {recipes.map(({ recipe, _links }) => (
                    <Recipe
                        calories={recipe.calories}
                        title={recipe.label}
                        key={recipe.url}
                        img={recipe.image}
                        link={_links.self.href}
                    />
                ))}
            </div>

            <Start />
        </div>
    );
}

export default Home;
