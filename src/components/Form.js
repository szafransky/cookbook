import React from 'react'
import '../scss/Form.scss'
function Form( {onChange, onSubmit, searchValue} ) {
    return (
        <div className="search-form">
            <form onSubmit={onSubmit}>
                <input onChange={onChange} className="search-bar" placeholder="Search recipes..." name="recipeName" type="text" value={searchValue}></input>
                <button className="search-button">Search</button>
            </form>
        </div>
    )
}

export default Form
