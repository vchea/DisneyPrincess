import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--pink bg-lightest-pink'
        type='search'
        placeholder='search princess'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;