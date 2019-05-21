import React, { Component } from 'react';
import classes from './CvContainer.css';
import Modal from '../../Layout/Modal/Modal';
import Spinner from '../../Layout/Spinner/Spinner';
import CvDataCollector from '../CvDataCollector/CvDataCollector';
import CvHeadlineSection from '../CvSectionInstances/CvHeadlineSection/CvHeadlineSection';
import CvLanguagesSection from '../CvSectionInstances/CvLanguagesSection/CvLanguagesSection';
import CvSectionContent from '../CvSectionTemplates/CvSectionContent/CvSectionContent';
import {IoMdHome} from "react-icons/io";

class CvContainer extends Component {

  constructor() {
    super();
    this.state = {
      data: null,
      error: false }
    }

  handleCvData = (response) => {
    if (response.error) {
      this.setState({error: true});
    } else {
      this.setState({data: response.data});
    }
  }

  render() {
    if (!this.state.data) {
      return (
        <React.Fragment>
          <Modal>
              <Spinner>
                  Generating CV ...
              </Spinner>
          </Modal>
          <CvDataCollector OnResponse={this.handleCvData} 
            login={this.props.match.params.login}/>}
        </React.Fragment>)
    } else {
      return (
        <React.Fragment>
          <IoMdHome className={classes.home} 
            onClick={() => this.props.history.push('/')}/>
          
          <div className={classes.CvContainer}>            
            <CvHeadlineSection name={this.state.data.user.name}
              avatarUrl={this.state.data.user.avatar_url}
              webPageUrl={this.state.data.user.blog}/>
            
            <div className={classes.mainArea}>
              <CvSectionContent title="Overview">
                {this.state.data.user.name} ({this.state.data.user.login}) is a developer with <strong>{this.state.data.user.public_repos}</strong> public repositories and <strong>{this.state.data.user.followers}</strong> followers.
              </CvSectionContent>

              <CvLanguagesSection repositories={this.state.data.repositories}/>

              <CvSectionContent title="About this resume">
                This résumé is generated automatically using public information from the developer's GitHub account. Do not hesitate to visit <a href={"https://github.com/"+this.state.data.user.login}>{this.state.data.user.name}'s GitHub page</a> for a complete work history.
              </CvSectionContent>
            </div>
          </div>
        </React.Fragment>)
    }
  }
}

export default CvContainer;