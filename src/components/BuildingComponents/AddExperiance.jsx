/* eslint-disable react/prop-types */

const AddExperiance = ({
    FontAwesomeIcon,
    handleExperiance,
    faChevronDown,
    isShowExperiance,
    faPlus
  }) => {
    return <div className="work-experiance-section drop-down-menu information-parent">
      <button className="education-information-button drop-down-menu-button" onClick={handleExperiance}>
        <span> Professional Experience</span><FontAwesomeIcon icon={faChevronDown} />
      </button>
      {isShowExperiance &&
        <div className="education-information-list drop-down-menu-list">
          <div className='list userEmpDetail'>
            <input type="text" name="userEmpDetail" id="" placeholder='Employed Company' />
          </div>
          <div className='list userJobTitle'>
            <input type="text" name="userJobTitle" id="" placeholder='Employment Position' />
          </div>
          <div className='list userEmpDurationYear'>
            <div className='employed-duration'>
              <label htmlFor="userEmpDurationYearFrom">Start</label>
              <input type="date" name="userEmpDurationYearFrom" id="" />
            </div>
            <div className='employed-duration'>
              <label htmlFor="userEmpDurationYearFrom">End</label>
              <input type="date" name="userEmpDurationYearTo" id="" />
            </div>
          </div>
          <div className='list'></div>
          <div className="add-item">
            <button className="save">Save</button>
          </div>
          <div className="add-additional-item">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>}
    </div>;
  }
  
  export { AddExperiance }