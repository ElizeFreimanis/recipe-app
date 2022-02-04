import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as fiIcons from 'react-icons/fi';
import { IconContext } from 'react-icons';

import './styles.css';

import { APP_ID, APP_KEY } from '../../settings';
import FullRecipeHeader from '../../components/FullRecipeHeader';
import Nutrient from '../../components/Nutrient';
import IngredientList from '../../components/IngredientList';

function FullRecipe() {
    const [recipe, setRecipe] = useState();

    const { id } = useParams();

    const getFullRecipe = useCallback(async () => {
        try {
            const response = await fetch(
                `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
            const data = await response.json();

            setRecipe(data.recipe);
        } catch (error) {
            window.alert('Could not find recipe.');
        }
    }, [id]);

    useEffect(() => {
        getFullRecipe();
    }, [getFullRecipe]);

    if (!recipe) {
        return false;
    }

    return (
        <div className='full-recipe'>
            <IconContext.Provider value={{ className: 'arrow-icon' }}>
                <Link to='/'>
                    <fiIcons.FiArrowLeft />
                </Link>
            </IconContext.Provider>
            <FullRecipeHeader recipe={recipe} />
            <div className='full-recipe-info'>
                <h1 className='full-recipe-title'>{recipe.label}</h1>
                <div className='label-ctn'>
                    {recipe.dietLabels.map((label, index) => (
                        <span key={index} className='label'>
                            {label}
                        </span>
                    ))}
                </div>
                <h2>Nutrients</h2>
                <div className='nutrient-ctn'>
                    <Nutrient {...recipe.totalNutrients.FAT} />
                    <Nutrient {...recipe.totalNutrients.CHOCDF} />
                    <Nutrient {...recipe.totalNutrients.ENERC_KCAL} />
                    <Nutrient {...recipe.totalNutrients.PROCNT} />
                </div>

                <h2>Ingredients</h2>
                <IngredientList ingredients={recipe.ingredients} />
            </div>
        </div>
    );
}

export default FullRecipe;
