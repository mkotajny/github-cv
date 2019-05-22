import React from 'react';
import Modal from '../../../UI/Modal/Modal';
import Spinner from '../../../UI/Spinner/Spinner';

const CvSpinner = () => {
  return (
    <Modal>
      <Spinner>
          CV creation in progress ...
      </Spinner>
    </Modal>
  );
};

export default CvSpinner;