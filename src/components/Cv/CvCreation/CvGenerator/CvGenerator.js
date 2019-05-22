import React, { Component } from 'react';
import classes from './CvGenerator.css';
import Modal from '../../../UI/Modal/Modal';
import Spinner from '../../../UI/Spinner/Spinner';
import CvDataCollector from '../CvDataCollector/CvDataCollector';
import CvHeadlineSection from '../../CvSections/CvSectionInstances/CvHeadlineSection/CvHeadlineSection';
import CvLanguagesSection from '../../CvSections/CvSectionInstances/CvLanguagesSection/CvLanguagesSection';
import CvSectionContent from '../../CvSections/CvSectionTemplates/CvSectionContent/CvSectionContent';
import {IoMdHome} from "react-icons/io";

class CvGenerator extends Component {

  constructor() {
    super();
    this.state = {
      data: null,
      error: null }
    }

  handleCvData = (response) => {
    if (response.error) {
      this.setState({error: response.error});
    } else {
      this.setState({data: response.data});
    }
  }

  render() {
    if (this.state.error) {
      return (
          <Modal>
            <strong>Error:</strong><br/><br/>
            {this.state.error.message}
            <IoMdHome className={classes.home} 
            onClick={() => this.props.history.push('/')}/>
          </Modal>
          )
    }
    if (!this.state.data) {
      return (
        <React.Fragment>
          <Modal>
              <Spinner>
                  CV creation in progress ...
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
                This résumé is generated automatically using public information from the developer's GitHub account. Do not hesitate to visit <a href={"https://github.com/"+this.state.data.user.login}>{this.state.data.user.name} ({this.state.data.user.login}) GitHub page</a> for a complete work history.
              </CvSectionContent>
            </div>
          </div>
        </React.Fragment>)
    }
  }
}

export default CvGenerator;