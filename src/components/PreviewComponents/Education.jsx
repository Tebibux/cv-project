/* eslint-disable react/prop-types */
export function Education({ educations }) {

    return <div className="education-preview-section">
      <h2>Education</h2>
      {educations && educations.filter((education, index) => index !== 0).map((education) => (
        <div key={education.docKey} className="education-review">
          <h3>{education.filedOfEducation} in <span className="edu-level"> {education.studiedDegree}</span></h3>
          <div className="education-desc">
            <p className="university-name">{education.studiedUniversity} University</p>
            <p className="date-container">
              <span className="start-date">{education.startDate}</span>
              <span className="date-divider">-</span>
              <span className="end-date">{education.endDate}</span>
            </p>
          </div>
          <hr />
        </div>
      ))
      }
  
    </div>;
  }