import React from 'react';
import CvSectionContent from '../../CvSectionTemplates/CvSectionContent/CvSectionContent';
import CvContentLi from '../../CvSectionTemplates/CvContentLi/CvContentLi';

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

export default CvLanguagesSection;