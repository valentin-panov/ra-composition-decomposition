import React from 'react';
import PopularWidgetItem from './PopularWidgetItem/PopularWidgetItem';

export default function PopularWidget(props) {
  return (
    <div className='PopularWidget'>
      {/* <h2>{props.widget.title}</h2> */}
      <ul className='PopularWidget_list'>
        <PopularWidgetItem props={props} />
      </ul>
    </div>
  );
}
