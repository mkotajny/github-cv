import React from 'react';
import classes from './CvContentLi.css';

const CvContentLi = (props) => {
  const items = props.items.map((item) =>
  <li>{item}</li>);

  return (
    <ul className={classes.items}>
      {items}
    </ul>
  );
};

export default CvContentLi;