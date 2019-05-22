import React from 'react';
import Modal from '../../../Layout/Modal/Modal';
import Spinner from '../../../Layout/Spinner/Spinner';

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