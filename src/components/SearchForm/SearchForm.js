import React from 'react';
import SearchCategory from './SearchCategory/SearchCategory';
import SearchLogo from './SearchLogo/SearchLogo';
import SearchField from './SearchField/SearchField';
import SearchBtn from './SearchBtn/SearchBtn';
import SearchSubstring from './SearchSubstring/SearchSubstring';

export default function SearchForm(props) {
  return (
    <div className='SearchForm'>
      {/* contains search form */}
      <SearchCategory props={props.searchCategory} />
      <SearchLogo />
      <SearchField />
      <SearchBtn />
      <SearchSubstring props={props.searchSubstring} />
    </div>
  );
}
