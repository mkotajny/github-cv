import React from 'react';
import classes from './Spinner.css';
import Modal from '../Modal/Modal';

const Spinner = (props) => {
  return (
    <Modal>
      <div className={classes.loader}/>
      <div className={classes.loaderMessage}>
        {props.children}
      </div>
    </Modal>
  );
};

export default Spinner;