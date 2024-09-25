/* eslint-disable react/prop-types */
const ItemAddForm = ({ handleFormSubmit, editingEducation, btnType }) => {
    return (
      <form className="education-information-list drop-down-menu-list" onSubmit={handleFormSubmit}>
        <div className='list UserEducation'>
          <input type="text" name="userEducation" id="userEducation" placeholder='Education' required />
        </div>
        <div className='list userDegree'>
          <input type="text" name="degree" id="degree" placeholder='Degree, PhD ...' required />
        </div>
        <div className='list userInstitute'>
          <input type="text" name="userInstitute" id="userInstitute" placeholder='Yale University' required />
        </div>
        <div className='list userEduDurationYear'>
          <div className='education-duration'>
            <label htmlFor="userEduDurationYearFrom">Start</label>
            <input type="date" name="userEduDurationYearFrom" id="userEduDurationYearFrom" required />
          </div>
          <div className='education-duration'>
            <label htmlFor="userEduDurationYearTo">End</label>
            <input type="date" name="userEduDurationYearTo" id="userEduDurationYearTo" required />
          </div>
        </div>
        <div className="add-item">
          <button type="submit" className="save">{btnType}</button>
        </div>
      </form>
    );
  };
  
  export default ItemAddForm;