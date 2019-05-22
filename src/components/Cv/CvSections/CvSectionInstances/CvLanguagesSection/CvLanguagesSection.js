import React from 'react';
import CvSectionContent from '../../CvSectionTemplates/CvSectionContent/CvSectionContent';
import CvContentLi from '../../CvSectionTemplates/CvContentLi/CvContentLi';
import PropTypes from 'prop-types';

const CvLanguagesSection = (props) => {
  
  const getLanguages = () => {
    const languages = [];
    props.repositories.forEach(element => {
      if (element.language 
        && !languages.includes(element.language)) {
        languages.push(element.language)
      }
    });
    return languages;
  }

  return (
    <CvSectionContent title="Programming Languages">
      <CvContentLi items={getLanguages()} />
    </CvSectionContent>
  );
};

CvLanguagesSection.propTypes = {
  repositories: PropTypes.array.isRequired
};

export default CvLanguagesSection;