import React from 'react';
import HeaderTabNews from './HeaderTabNews/HeaderTabNews';
import ErrorWidget from '../Widgets/ErrorWidget/ErrorWidget';
import HeaderCurrency from './HeaderCurrency/HeaderCurrency';

export default function Header(props) {
  return (
    <div className='Header'>
      {/* contains news tabs and one widget */}
      <HeaderTabNews props={props.tabs}>
        <HeaderCurrency />
      </HeaderTabNews>
      <ErrorWidget />
    </div>
  );
}
