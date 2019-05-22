import React from 'react';
import Modal from '../../../Layout/Modal/Modal';

const CvErrorMessage = (props) => {
  return (
    <Modal>
      <strong>Error:</strong>
      <br/><br/>
      {props.errorMessage}
    </Modal>
  );
};

export default CvErrorMessage;