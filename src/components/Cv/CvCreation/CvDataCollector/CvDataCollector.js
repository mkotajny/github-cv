import React, { Component } from 'react';
import ApiDataCollector from '../../../Utility/ApiDataCollector/ApiDataCollector';
import PropTypes from 'prop-types';

class CvDataCollector extends Component {
  constructor() {
    super();
    this.state = {
      userData: null,
      repositoriesData: null,          
      error: false,
    }
    this.jsxContent = this.jsxContent.bind(this);
  }

  endOfLoading() {
    if (this.state.userData
        && this.state.repositoriesData) {
      return true;
    }
    return false;
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

  jsxContent = () => {
    const requests = this.props.requests.map((req) =>
      <ApiDataCollector onApiResponse={this.handleApiData}
          dataCategory={req.category} url={req.url}
          key={req.category}/>);
    return <React.Fragment>{requests}</React.Fragment>
  }
  
  render() {
    if (!this.endOfLoading()) {
      return this.jsxContent()
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
  requests: PropTypes.array.isRequired
};


export default CvDataCollector;