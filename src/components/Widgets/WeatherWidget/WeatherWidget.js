import React from 'react';
import WeatherWidgetActual from './WeatherWidgetActual/WeatherWidgetActual';
import WeatherWidgetForecast from './WeatherWidgetForecast/WeatherWidgetForecast';

export default function WeatherWidget(props) {
  return (
    <div className='WeatherWidget'>
      {/* <h2>{props.widget.title}</h2> */}
      <WeatherWidgetActual />
      <WeatherWidgetForecast />
    </div>
  );
}
