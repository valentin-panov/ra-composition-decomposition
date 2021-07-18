import React from 'react';

export default function NewsItem(props) {
  const { img, text, link } = props;
  return <li className='NewsItem'>{/* {img}, {link/title} */}</li>;
}
