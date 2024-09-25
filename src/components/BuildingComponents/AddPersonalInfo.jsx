/* eslint-disable react/prop-types */
const AddPersonalInfo = ({
    FontAwesomeIcon,
    handlePersonInfoShow,
    faChevronDown,
    isShowPersonalInfo,
    setProfileSelected,
    setGeneralInformation,
    generalInformation
  }) => {
  
  
    const handleImageInput = (e) => {
      // console.log(e.target.files[0]);
      const userImageFile = e.target.files[0];
      if (userImageFile) {
        const userImageReader = new FileReader();
  
        userImageReader.onload = () => {
          setGeneralInformation(() => (
            {
              ...generalInformation, userImage: {
                ...generalInformation.userImage,
                userImagePath: userImageReader.result,
                userImageName: userImageFile.name
              }
            }
          ))
          setProfileSelected(true)
          // console.log(generalInformation)
        }
  
        userImageReader.readAsDataURL(userImageFile);
      }
  
    }
  
    const handleUserName = (e) => {
      setGeneralInformation(() => ({
        ...generalInformation,
        userFullName: e.target.value
      }))
    }
    const handlePhoneNumber = (e) => {
      setGeneralInformation(() => ({
        ...generalInformation,
        userPhoneNumber: e.target.value
      }))
    }
    const handleUserEmail = (e) => {
      setGeneralInformation(() => ({
        ...generalInformation,
        userEmail: e.target.value
      }))
    }
    const handleUserLocation = (e) => {
      setGeneralInformation(() => ({
        ...generalInformation,
        userLocation: e.target.value
      }))
    }
    return <div className="personal-information  information-parent">
      <button className="personal-information-button drop-down-menu-button" onClick={handlePersonInfoShow}>
        <span> General Information </span> <FontAwesomeIcon icon={faChevronDown} />
      </button>
      {isShowPersonalInfo && <div className="personal-information drop-down-menu-list">
        <div className='list UserPhoto input-container'>
          <input
            type="file" name="image"
            accept="image/jpeg, image/png"
            onChange={handleImageInput}
          />
          <label htmlFor="file-input" className="custom-file-button">Upload Profile Image</label>
        </div>
        <div className='list UserFullName'>
          <input
            type="text" name="userName"
            id=""
            placeholder='Full Name'
            onChange={handleUserName}
          />
        </div>
        <div className='list UserPhone'>
          <input
            type="tel" name="userPhone"
            id=""
            placeholder='Phone Number'
            onChange={handlePhoneNumber}
          />
        </div>
        <div className='list UserEmail'>
          <input type="email"
            name="userEmail"
            id=""
            placeholder='Email'
            onChange={handleUserEmail} />
        </div>
        <div className='list Location'>
          <input type="text"
            name="userLocation"
            id=""
            placeholder='location'
            onChange={handleUserLocation} />
        </div>
      </div>}
    </div>;
  }
  
  
  export { AddPersonalInfo }