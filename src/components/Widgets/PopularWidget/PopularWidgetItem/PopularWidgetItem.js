import React from 'react';

export default function PopularWidgetItem(props) {
  const { title, subtitle } = props;
  return (
    <li className='PopularWidgetItem'>
      {title} - {subtitle}
    </li>
  );
}
