import React from 'react';
import classes from './CvContentLi.css';
import PropTypes from 'prop-types';

const CvContentLi = (props) => {
  const items = props.items.map((item) =>
  <li key={item}>{item}</li>);

  return (
    <ul className={classes.items}>
      {items}
    </ul>
  );
};

CvContentLi.propTypes = {
  items: PropTypes.array.isRequired
};

export default CvContentLi;