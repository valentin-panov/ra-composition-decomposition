import React from 'react';
import WeatherWidget from './WeatherWidget/WeatherWidget';

export default function Widgets() {
  return (
    <div className='Widgets'>
      {/* holds widgets */}
      <WeatherWidget />
    </div>
  );
}
