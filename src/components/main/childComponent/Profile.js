import React, { Component } from "react";

class Profile extends Component {
	render() {
		return (
			<div className="profile">
				<div className="userProfile">
					<input type="file" name="userImage"
						accept="image/png, image/gif, image/jpeg" />
					<input type="text" name="userName" />
					<input type="text" name="userProfile" />
				</div>
				<div className="userAddress">
					<form >
						<input type="tel" name="userPhone" />
						<input type="text" name="userLocation" />
						<input type="email" name="userEmail" />
						<input type="url" name="linkedIn" />
					</form>
				</div>
			</div>
		);
	}
}

export default Profile;
