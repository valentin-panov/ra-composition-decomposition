import React from 'react';
import HeaderTabDate from './HeaderTabDate/HeaderTabDate';
import NewsItem from './NewsItem/NewsItem';
import HeaderTabItem from './HeaderTabItem/HeaderTabItem';

export default function HeaderTabNews(props) {
  return (
    <div className='HeaderTabNews'>
      {/* contains tab and its content */}
      <HeaderTabItem>
        <NewsItem />
      </HeaderTabItem>
      <HeaderTabDate />
    </div>
  );
}
