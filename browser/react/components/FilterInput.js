import React from 'react';

const FilterInput = (props) => {

  const handleChange = props.handleChange;
  const inputValue = props.inputValue;
  const prevD = function (e){
    e.preventDefault();
  }

  return (
    <form onSubmit={prevD} className='form-group' style={{marginTop: '20px'}}>
      <input
        onChange={handleChange}
        value={inputValue}
        className='form-control'
        placeholder="Enter artist name"
      />
    </form>
  )
};

export default FilterInput;
