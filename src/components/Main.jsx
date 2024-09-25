/* eslint-disable react/prop-types */

import { BuilderSection } from './BuilderSection';
import { PreviewSection } from './PreviewSection';


const Main = ({
  faDownload,
  handlePersonInfoShow,
  faChevronDown,
  isShowPersonalInfo,
  handleEducation,
  isShowEducation,
  faPlus,
  handleExperiance,
  isShowExperiance,
  handleSkill,
  isShowSkill,
  handlePreview,
  profileSelected,
  setProfileSelected,
  setGeneralInformation,
  generalInformation,
  educations,
  setEducations
}) => {

  return <main>
    <BuilderSection
      handlePreview={handlePreview}
      faDownload={faDownload}
      handlePersonInfoShow={handlePersonInfoShow}
      faChevronDown={faChevronDown}
      isShowPersonalInfo={isShowPersonalInfo}
      handleEducation={handleEducation}
      isShowEducation={isShowEducation}
      faPlus={faPlus}
      handleExperiance={handleExperiance}
      isShowExperiance={isShowExperiance}
      handleSkill={handleSkill}
      isShowSkill={isShowSkill}
      setProfileSelected={setProfileSelected}
      setGeneralInformation={setGeneralInformation}
      generalInformation={generalInformation}
      educations={educations}
      setEducations={setEducations}
    />
    <PreviewSection
      profileSelected={profileSelected}
      generalInformation={generalInformation}
      educations={educations}
    />
  </main>;
}


export default Main