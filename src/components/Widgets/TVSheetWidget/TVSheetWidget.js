import React from 'react';
import TVSheetWidgetItem from './TVSheetWidgetItem/TVSheetWidgetItem';

export default function TVSheetWidget(props) {
  return (
    <div className='TVSheetWidget'>
      <h2>{props.widget.title}</h2>
      <span className='TVSheetWidget_onTheAir'>Эфир</span>
      <ul className='TVSheetWidget_list'>
        <TVSheetWidgetItem props={props} />
      </ul>
    </div>
  );
}
