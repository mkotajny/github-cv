import React, { Component } from 'react';
import classes from './CvGenerator.css';
import CvDataCollector from '../CvDataCollector/CvDataCollector';
import CvContainer from '../../CvSections/CvContainer/CvContainer';
import CvErrorMessage from '../CvErrorMessage/CvErrorMessage';
import CvSpinner from '../CvSpinner/CvSpinner';
import {IoMdHome} from "react-icons/io";
import PropTypes from 'prop-types';

class CvGenerator extends Component {

  constructor() {
    super();
    this.state = {
      data: null,
      error: null }
    this.jsxContent = this.jsxContent.bind(this);
    };
    

  handleCvData = (response) => {
    if (response.error) {
      this.setState({error: response.error});
    } else {
      this.setState({data: response.data});
    }
  }
  
  jsxContent = () => {
    switch (true)
    {
      case this.state.error !== null:
        return <CvErrorMessage errorMessage={this.state.error.message} />
      case !this.state.data:
        return (
          <React.Fragment>
            <CvSpinner />
            <CvDataCollector onResponse={this.handleCvData} 
              login={this.props.match.params.login}/>}
          </React.Fragment>)
      default:
        return <CvContainer data={this.state.data} />  
    }    
  }

  render() {
    return (
      <React.Fragment>
        <IoMdHome className={classes.home} 
          onClick={() => this.props.history.push('/')}/>
        {this.jsxContent()}
      </React.Fragment>
    );
  }
}

CvGenerator.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default CvGenerator;