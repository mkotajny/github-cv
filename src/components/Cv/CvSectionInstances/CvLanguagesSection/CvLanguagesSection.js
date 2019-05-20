import React from 'react';
import CvSection from '../../CvSectionTemplates/CvSection/CvSection';
import CvSectionContentStandard from '../../CvSectionTemplates/CvSectionContentStandard/CvSectionContentStandard';
import CvSectionContentLi from '../../CvSectionTemplates/CvSectionContentLi/CvSectionContentLi';

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
    <CvSection title="Programming Languages">
      <CvSectionContentStandard>
        <CvSectionContentLi items={getLanguages()} />
      </CvSectionContentStandard>
    </CvSection>
  );
};

export default CvLanguagesSection;