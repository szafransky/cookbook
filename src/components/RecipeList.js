import React from 'react'
import Recipe from './Recipe'
import '../scss/RecipeList.scss'

function RecipeList({ recipesToList }) {
    return (
        <div className="recipe-list">
            {recipesToList.map((recipe, key) => <Recipe key={key} data={recipe}/>)}
        </div>
    )
}

export default RecipeList
