/* eslint-disable react/prop-types */

const AddSkill = ({
    handleSkill,
    faChevronDown,
    isShowSkill,
    faPlus,
    FontAwesomeIcon
  }) => {
    return <div className="skills-information drop-down-menu information-parent">
      <button className="education-information-button drop-down-menu-button" onClick={handleSkill}>
        <span> Add Skill </span><FontAwesomeIcon icon={faChevronDown} />
      </button>
      {isShowSkill && <div className="education-information-list drop-down-menu-list">
        <div className='list'></div>
        <div className='list userSkill'>
          <input type="text" name="userSkill" id="" placeholder='Photo Editing ...' />
        </div>
        <div className="add-item">
          <button className="save">Save</button>
          <div className="add-additional-item">
            <FontAwesomeIcon icon={faPlus} /> </div>
        </div>
      </div>}
    </div>;
  }
  
  export { AddSkill }