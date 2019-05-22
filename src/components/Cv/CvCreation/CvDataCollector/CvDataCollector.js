import React, { Component } from 'react';
import ApiDataCollector from '../../../Utility/ApiDataCollector/ApiDataCollector';
import githubApiUrl from '../../../../config/githubApiUrl';
import PropTypes from 'prop-types';

class CvDataCollector extends Component {
  constructor() {
    super();
    this.state = {
      userData: null,
      repositoriesData: null,          
      endOfLoading: false,
      error: false,
    }
    this.jsxContent = this.jsxContent.bind(this);
  }

  checkEndOfLoading() {
    if (this.state.userData
        && this.state.repositoriesData
        && !this.state.endOfLoading) {
      this.setState({endOfLoading: true})
    }
  }

  userFriendlyErrorResponse(errorResponse) {
    switch (errorResponse.status) {
      case 404:
        return {
          error: {
            code: errorResponse.status,
            message: "The user you requested was not found. Please check your spelling and try again." 
            }
        }
      default: return { error: { message: "Something went wrong during CV generation. Please try again." } };
    }    
  }

  handleApiData = (response) => {
    if (response.error) {
      this.props.onResponse(this.userFriendlyErrorResponse(response.error.response));
    } else {
      this.setState({[response.dataCategory]: response.data});
    }
  }

  jsxContent = (url) => {
    return (
      <React.Fragment>
        <ApiDataCollector onApiResponse={this.handleApiData}
          dataCategory="userData" url={url}/>
        <ApiDataCollector onApiResponse={this.handleApiData}
          dataCategory="repositoriesData" url={url + "/repos?per_page=100"}/>
      </React.Fragment>
    )
  }
  
  render() {
    const url = githubApiUrl + this.props.login;
    this.checkEndOfLoading();
    if (!this.state.endOfLoading) {
      return this.jsxContent(url)
    } else {
      this.props.onResponse({
        data:{
          user: this.state.userData,
          repositories: this.state.repositoriesData}});
    }
    return null;
  }
}

CvDataCollector.propTypes = {
  onResponse: PropTypes.func.isRequired,
  login: PropTypes.string.isRequired
};


export default CvDataCollector;