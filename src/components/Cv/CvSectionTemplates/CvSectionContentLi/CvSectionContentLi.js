import React from 'react';
import classes from './CvSectionContentLi.css';

const CvSectionContentLi = (props) => {
  const items = props.items.map((item) =>
  <li>{item}</li>);

  return (
    <ul className={classes.items}>
      {items}
    </ul>
  );
};

export default CvSectionContentLi;