/* eslint-disable react/prop-types */
import ImageFiller from 'react-image-filler';

export function Profile({ profileSelected, generalInformation }) {

  return (
    <div className="general-information-box">
      {profileSelected ? (
        <>
          <img
            src={generalInformation.userImage.userImagePath} 
            className="user-photo" 
            alt={generalInformation.userImage.userImageName} />
        </>
      ) : (
        <ImageFiller className="user-photo" text="Profile Photo" />
      )}

      <ul className="user-desc">
        <li className='user-name' aria-label='user full name'>{generalInformation.userFullName} </li>
        <li className='user-phone' aria-label='user phone number'>{generalInformation.userPhoneNumber}</li>
        <li className='user-email' aria-label='user email'> {generalInformation.userEmail}</li>
        <li className='user-location' aria-label='user current location'>{generalInformation.userLocation}</li>
      </ul>
    </div>
  );
}