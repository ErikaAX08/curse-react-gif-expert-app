import React, { useState } from 'react'
import { PropTypes } from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      onNewCategory(inputValue.trim());
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={ inputValue }
          onChange={ handleInputChange }
        />
    </form>
  )
  
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}