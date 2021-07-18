import React from 'react';
import OnlineWidgetItem from './OnlineWidgetItem/OnlineWidgetItem';

export default function OnlineWidget(props) {
  // now on the air widget
  return (
    <div>
      <h2>{props.widget.title}</h2>
      <ul className='OnlineWidget'>
        <OnlineWidgetItem />
        <OnlineWidgetItem />
        <OnlineWidgetItem />
      </ul>
    </div>
  );
}
