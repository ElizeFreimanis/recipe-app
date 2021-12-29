import './styles.css';

function FullRecipeHeader({ recipe }) {
    return (
        <div className='full-recipe-header'>
            <img src={recipe.image} alt='' />
            <a href={recipe.url} target='_blank' rel='noreferrer'>
                <button className='instruction-btn'>To full recipe</button>
            </a>
        </div>
    );
}

export default FullRecipeHeader;
