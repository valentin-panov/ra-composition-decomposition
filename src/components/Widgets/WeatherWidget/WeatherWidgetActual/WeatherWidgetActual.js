import React from 'react';
import PropTypes from 'prop-types';
import WeatherWidgetActualTemp from './WeatherWidgetActualTemp/WeatherWidgetActualTemp';
import WeatherWidgetActualStatus from './WeatherWidgetActualStatus/WeatherWidgetActualStatus';

function WeatherWidgetActual(props) {
  return (
    <div className='WeatherWidgetActual'>
      <WeatherWidgetActualStatus />
      <WeatherWidgetActualTemp />
    </div>
  );
}

WeatherWidgetActual.propTypes = {};

export default WeatherWidgetActual;
