import React, { Component } from 'react';
import classes from './CvGenerator.css';
import CvDataCollector from '../CvDataCollector/CvDataCollector';
import CvSectionsContainer from '../../CvSections/CvSectionsContainer/CvSectionsContainer';
import CvErrorMessage from '../CvErrorMessage/CvErrorMessage';
import CvSpinner from '../CvSpinner/CvSpinner';
import {IoMdHome} from "react-icons/io";

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
      case this.state.error:
        return <CvErrorMessage errorMessage={this.state.error.message} />
      case !this.state.data:
        return (
          <React.Fragment>
            <CvSpinner />
            <CvDataCollector OnResponse={this.handleCvData} 
              login={this.props.match.params.login}/>}
          </React.Fragment>)
      default:
        return <CvSectionsContainer data={this.state.data} />  
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

export default CvGenerator;