import React, { Component } from 'react';
import ApiDataCollector from '../../Utility/ApiDataCollector/ApiDataCollector';
import githubApiUrl from '../../../config/githubApiUrl';

class CvDataCollector extends Component {
  constructor() {
    super();
    this.state = {
      userData: null,
      repositoriesData: null,          
      endOfLoading: false,
      error: false,
    }
  }

  checkEndOfLoading() {
    if (this.state.userData
        && this.state.repositoriesData
        && !this.state.endOfLoading) {
      this.setState({endOfLoading: true})
    }
  }

  handleApiData = (response) => {
    if (response.error) {
      this.props.OnResponse({error: true});
    } else {
      this.setState({[response.dataCategory]: response.data});
    }
  }

  render() {
    const url = githubApiUrl + this.props.login;
    this.checkEndOfLoading();
    if (!this.state.endOfLoading) {
      return (
      <React.Fragment>
        <ApiDataCollector OnApiResponse={this.handleApiData} 
          dataCategory="userData" url={url}/>
        <ApiDataCollector OnApiResponse={this.handleApiData} 
          dataCategory="repositoriesData" url={url + "/repos?per_page=100"}/>
      </React.Fragment>
      )
    } else {
      this.props.OnResponse({
        data:{
          user: this.state.userData,
          repositories: this.state.repositoriesData}});
    }
    return null;
  }
}

export default CvDataCollector;