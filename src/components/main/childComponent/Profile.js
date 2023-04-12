import React, { Component } from "react";

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isInputActive: true,
			inputNameValue: '',
		};
	};
	previewImage = () => {
		let fileInput = document.getElementById('fileInput');
		let imageDiv = document.getElementById('image-div');
		let label = document.getElementById('image-selection');
		// Get the selected image
		fileInput.addEventListener('change', () => {
			const imageFile = fileInput.files[0];
			if (imageFile) {
				const reader = new FileReader();
				reader.readAsDataURL(imageFile);
				reader.onload = () => {
					const imgData = reader.result;
					localStorage.setItem('imageData', imgData);
					const userImage = new Image();
					userImage.setAttribute('src', imgData);
					userImage.setAttribute('id', 'userImage')
					imageDiv.appendChild(userImage);
					label.style.display = 'none';
					imageDiv.style.display = 'grid';
					imageDiv.style.placeItems = 'center';
				};
				reader.onerror = (error) => {
					console.error('Error: ', error);
				}
			} else {
				console.warn('No file Selected')
			}

		})

	}
	// this will reactivate the text area when double click
	handleDoubleClick = () => {
		this.setState({ isInputActive: true });
	}
	handleBlur = () => {
		this.setState({ isInputActive: false });
	}
	// this will change the input name value to the user input 
	handleNameChange = (event) => {
		this.setState({ inputNameValue: event.target.value });
	}

	render() {
		const { isInputActive, inputNameValue } = this.state;
		return (
			<div className="profile">
				{/* profile starts Here */}
				<div className="userProfile">
					<div id="image-div">
						<label htmlFor="fileInput" id="image-selection">
							<input type="file" accept=".jpg, .jpeg, .png"
								name="fileInput" id="fileInput" onClick={this.previewImage} />
						</label>

						{/* Add placeholder here for the image */}
					</div>
					{/* image input ends here */}
					<div className="disc">
						{
							isInputActive ? (
								<input type="text" name="userName"
									placeholder="Your Name" id="userName"
									value={inputNameValue}
									onChange={this.handleNameChange}
									onBlur={this.handleBlur}
									autoFocus
								/>
							) : (
								<div className="userName"
									onDoubleClick={this.handleDoubleClick} >
									{inputNameValue}
								</div>
							)
						}
						{/* using the logic in the userName input render the Bio */}
						{/* <textarea type="text" name="userBio" rows="4" cols="50"
							placeholder="Small bio about yourself here" id="userBio" /> */}
					</div>
				</div>
				<div className="userAddress">
					<form >
						<input type="tel" name="userPhone" placeholder="You'r Phone Here" />
						<input type="text" name="userLocation" placeholder="Your current location here" />
						<input type="email" name="userEmail" placeholder="Your email here" />
						<input type="url" name="linkedIn" placeholder="Your linkedIn here" />
					</form>
				</div>
				{/* profile ends Here */}
			</div>

		);
	}
}

export default Profile;