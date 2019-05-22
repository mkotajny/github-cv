import React from 'react';
import Modal from '../../../UI/Modal/Modal';
import PropTypes from 'prop-types';

const CvErrorMessage = (props) => {
  return (
    <Modal>
      <strong>Error:</strong>
      <br/><br/>
      {props.errorMessage}
    </Modal>
  );
};

CvErrorMessage.propTypes = { errorMessage: PropTypes.string.isRequired};

export default CvErrorMessage;