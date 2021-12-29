import './styles.css';

function IngredientList({ ingredients }) {
    return (
        <ol className='ingredient-list'>
            {ingredients.map(({ food, foodId, image }) => (
                <li key={foodId}>
                    <img alt='' className='ingredient-img' src={image} />
                    <p className='ingredient'>{food}</p>
                </li>
            ))}
        </ol>
    );
}

export default IngredientList;
