import React, { useState } from 'react'
import '../scss/Recipe.scss'


function Recipe( {data} ) {

    const [showIngredients, setShowIngredients] = useState(false);



    const toggleIngredients = () => {

        setShowIngredients(!showIngredients);
    }
    return (
        <div id="recipe-container" className={showIngredients ? "cool" : null}>
            <h1 className="title">{data.recipe.label}</h1>
           
           
            <img src={data.recipe.image} alt={data.recipe.label}></img>
           
           
               
            <button onClick={toggleIngredients} className="show-button">Show ingredients</button>
            <div id="ingredients" className={showIngredients ? "cool" : null}>
                     <h3>Ingredients</h3>
                    {data.recipe.ingredients.map((ingredient, key) => {
                      return  <li key={key}>{ingredient.text}</li>
                    })}
                   
                </div>
                <p>{`Calories: ${data.recipe.calories.toFixed(0)}`}</p>
        </div>
    )
}

export default Recipe
