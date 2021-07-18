/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function TVSheetWidgetItem(props) {
  const { time, title, channel } = props;
  return <li className='TVSheetWidgetItem'>{/* time, title, channel */}</li>;
}

TVSheetWidgetItem.propTypes = {};

export default TVSheetWidgetItem;
