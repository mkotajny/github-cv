import React from 'react';
import CvSectionContentStandard from '../../CvSectionTemplates/CvSectionContentStandard/CvSectionContentStandard';
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
    <CvSectionContentStandard title="Programming Languages">
      <CvContentLi items={getLanguages()} />
    </CvSectionContentStandard>
  );
};

export default CvLanguagesSection;