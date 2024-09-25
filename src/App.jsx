import { useState } from 'react';
import './App.css';
import { faChevronDown, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';

// components
import Main from './components/Main';
import { Header } from './components/Header';

function App() {
  // uses for the dropdown button of the profile filler
  const [isShowPersonalInfo, setIsShowPersonalInfo] = useState(false);
  const [isShowEducation, setIsShowEducation] = useState(false);
  const [isShowExperiance, setIsShowExperiance] = useState(false);
  const [isShowSkill, setIsShowSkill] = useState(false);

  // for the General Information variable placeholder object
  const [generalInformation, setGeneralInformation] = useState({
    userImage: {
      userImagePath: null,
      userImageName: ''
    },
    userFullName: 'John Doe',
    userPhoneNumber: '+123456789',
    userEmail: 'example@example.com',
    userLocation: 'City, State, Country'
  });

  // Object used to hold the education individual data
  // array used to hold objects of the Education Experiance
  const [educations, setEducations] = useState([]);



  // select the my-cv div from the html document
  // const previewToDownload = document.querySelector('.preview-section');

  // checks if profile is selected or not 
  const [profileSelected, setProfileSelected] = useState(false);

  // function reSetter will reset the state to its original status
  const reSetter = () => {
    if (isShowPersonalInfo === true) setIsShowPersonalInfo(!isShowPersonalInfo);
    if (isShowEducation === true) setIsShowEducation(!isShowEducation);
    if (isShowExperiance === true) setIsShowExperiance(!isShowExperiance);
    if (isShowSkill === true) setIsShowSkill(!isShowSkill);
    if (isShowEducation === true) setIsShowEducation(!isShowEducation);
  }

  const handlePersonInfoShow = () => {
    // return all the state to its original state and set the desired state change
    reSetter();
    setIsShowPersonalInfo(!isShowPersonalInfo);
  }

  const handleEducation = () => {
    // return all the state to its original state and set the desired state change
    reSetter();
    setIsShowEducation(!isShowEducation);
  }

  const handleExperiance = () => {
    // return all the state to its original state and set the desired state change
    reSetter();
    setIsShowExperiance(!isShowExperiance);
  }

  const handleSkill = () => {
    // return all the state to its original state and set the desired state change
    reSetter()
    setIsShowSkill(!isShowSkill)
  }


  // handlePreview will handle the preview and download process of the CV
  const handlePreview = () => {
    // console.log('message before if close')
    // if (previewToDownload) {
    //   const popupWindow = window.open('', '_blank', 'width=21cm, height=auto');
    //   popupWindow.document.open();
    //   popupWindow.document.write(`${previewToDownload.outerHTML}`);
    //   popupWindow.document.close();
    //   popupWindow.print();
    // } 
    const previewToDownloadAlt = document.getElementById('my-cv');
    if (previewToDownloadAlt) {
      const printWindow = window.open('', '', 'width=794,height=auto'); // A4 size in pixels (assuming 72 DPI)
      printWindow.document.open();
      printWindow.document.write(`
      <html>
      <head>
        <title>Your CV</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
          .preview-section {
            height: 100vh;
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-left: 20px;
            padding: 18px;
          
          }
          
          .skill-desc,
          .professional-exp,
          .education-preview-section,
          .general-information-box {
            padding: 20px;
            box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.75);
          }
          
          .general-information-box {
            display: grid;
            grid-template-columns: 1fr 3fr;
          }
          
          .user-photo {
            width: 150px;
            margin-left: 30px;
            height: 100%;
          }
          
          .user-desc {
            justify-self: end;
            margin-right: 10%;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.42);
            -webkit-box-shadow: 6px 0px 0px 0px rgba(0, 0, 0, 0.52);
            -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.52);
            /* border-image: linear-gradient(to right, white, black); */
          }
          
          .user-desc>li {
            list-style: none;
            margin-top: 10px;
            margin-right: 15px;
            font-size: 18px;
          }
          
          .user-desc>.user-name {
            font-weight: bold;
          }
          
          .professional-desc,
          .education-preview-section {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            gap: 10px;
          }
          
          .education-preview-section>h4 {
            font-size: 18px;
          }
          
          .education-desc {
            display: flex;
            justify-content: space-between;
            padding-right: 10%;
          }
        </style>
      </head>
      <body>
        ${previewToDownloadAlt.outerHTML}
      </body>
      </html>
    `);
      printWindow.document.close();
      printWindow.print();
    } else {
      console.error(`Element with ID '${previewToDownloadAlt}' not found.`);
    }
  }


  return (
    <div className="container">
      <Header />
      <Main
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
        handlePreview={handlePreview}
        profileSelected={profileSelected}
        setProfileSelected={setProfileSelected}
        setGeneralInformation={setGeneralInformation}
        generalInformation={generalInformation}
        educations={educations}
        setEducations={setEducations}
      />
    </div>
  )
}

export default App