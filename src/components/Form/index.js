import { useEffect, useState, useCallback } from 'react';
import { APP_ID, APP_KEY } from '../../settings';
import * as fiIcons from 'react-icons/fi';

import Option from '../../components/Option';
import OptionTitle from '../../components/OptionTitle';

import './styles.css';

export default function Form({ setRecipes }) {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [mealType, setMealType] = useState([]);
    const [diet, setDiet] = useState([]);
    const [cuisine, setCuisine] = useState([]);

    const clickedMealType = (type) => {
        if (mealType.includes(type)) {
            setMealType(
                mealType.filter((existingType) => existingType !== type)
            );
        } else {
            setMealType([...mealType, type]);
        }
    };

    const clickedDiet = (type) => {
        if (diet.includes(type)) {
            setDiet(diet.filter((existingType) => existingType !== type));
        } else {
            setDiet([...diet, type]);
        }
    };

    const clickedCuisine = (type) => {
        if (cuisine.includes(type)) {
            setCuisine(cuisine.filter((existingType) => existingType !== type));
        } else {
            setCuisine([...cuisine, type]);
        }
    };

    const getRecipes = useCallback(async () => {
        let URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

        if (mealType.length) {
            URL += `&mealType=${mealType.join('&mealType=')}`;
        }

        if (diet.length) {
            URL += `&diet=${diet.join('&diet=')}`;
        }

        if (cuisine.length) {
            URL += `&cuisineType=${cuisine.join('&cuisineType=')}`;
        }

        try {
            const response = await fetch(URL);
            const data = await response.json();
            setRecipes(data.hits);
        } catch (error) {
            window.alert('Too many API calls!');
        }
    }, [query, setRecipes, mealType, diet, cuisine]);

    useEffect(() => {
        getRecipes();
    }, [getRecipes]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    // API request is made on submit
    const getSearch = (e) => {
        e.preventDefault();

        setQuery(search);

        setSearch('');
    };

    return (
        <div className='form-ctn'>
            <form className='search-form' onSubmit={getSearch}>
                <input
                    className='search-bar'
                    type='text'
                    value={search}
                    onChange={handleChange}
                ></input>
                <button className='search-btn' type='submit'>
                    <fiIcons.FiSearch style={{ fontSize: '23px' }} />
                </button>
            </form>
            <OptionTitle>MEAL TYPE</OptionTitle>
            <div className='option-ctn'>
                <Option
                    selected={mealType.includes('breakfast')}
                    text='Breakfast'
                    onClick={() => clickedMealType('breakfast')}
                    backgroundImg='./images/breakfast.jpg'
                />
                <Option
                    selected={mealType.includes('lunch')}
                    text='Lunch'
                    onClick={() => clickedMealType('lunch')}
                    backgroundImg='./images/lunch.jpg'
                />
                <Option
                    selected={mealType.includes('dinner')}
                    onClick={() => clickedMealType('dinner')}
                    text='Dinner'
                    backgroundImg='./images/dinner.jpg'
                />
                <Option
                    selected={mealType.includes('snack')}
                    onClick={() => clickedMealType('snack')}
                    text='Snack'
                    backgroundImg='./images/snack.jpg'
                />
            </div>
            <hr />

            <OptionTitle>DIET</OptionTitle>
            <div className='option-ctn'>
                <Option
                    selected={diet.includes('high-fiber')}
                    onClick={() => clickedDiet('high-fiber')}
                    text='High-fiber'
                    backgroundImg='./images/fiber.jpg'
                />
                <Option
                    selected={diet.includes('high-protein')}
                    onClick={() => clickedDiet('high-protein')}
                    text='High-protein'
                    backgroundImg='./images/protein.jpg'
                />
                <Option
                    selected={diet.includes('low-carb')}
                    onClick={() => clickedDiet('low-carb')}
                    text='Low-carb'
                    backgroundImg='./images/carb.jpg'
                />
                <Option
                    selected={diet.includes('low-fat')}
                    onClick={() => clickedDiet('low-fat')}
                    text='Low-fat'
                    backgroundImg='./images/fat.jpg'
                />
            </div>
            <hr />
            <OptionTitle>CUISINE</OptionTitle>
            <div className='option-ctn'>
                <Option
                    selected={cuisine.includes('italian')}
                    onClick={() => clickedCuisine('italian')}
                    text='Italian'
                    backgroundImg='./images/italian.jpg'
                />
                <Option
                    selected={cuisine.includes('american')}
                    onClick={() => clickedCuisine('american')}
                    text='American'
                    backgroundImg='./images/american.jpg'
                />
                <Option
                    selected={cuisine.includes('asian')}
                    onClick={() => clickedCuisine('asian')}
                    text='Asian'
                    backgroundImg='./images/asian.jpg'
                />
                <Option
                    selected={cuisine.includes('indian')}
                    onClick={() => clickedCuisine('indian')}
                    text='Indian'
                    backgroundImg='./images/indian.jpg'
                />
                <Option
                    selected={cuisine.includes('mexican')}
                    onClick={() => clickedCuisine('mexican')}
                    text='Mexican'
                    backgroundImg='./images/mexican.jpg'
                />
                <Option
                    selected={cuisine.includes('nordic')}
                    onClick={() => clickedCuisine('nordic')}
                    text='Nordic'
                    backgroundImg='./images/nordic.jpg'
                />
                <Option
                    selected={cuisine.includes('middle eastern')}
                    onClick={() => clickedCuisine('middle eastern')}
                    text='Middle Eastern'
                    backgroundImg='./images/middleeastern.jpg'
                />
            </div>
        </div>
    );
}
