import React, { useState } from "react";
import uuid4 from "uuid4";

const Education = () => {
	const [certification, setCertification] = useState('');
	const [diplomas, setDiplomas ] = useState([]);
	const inputAddDocument = document.getElementById('listOfEducations');
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		certification: { diploma: '' },
	// 		diplomas: [],
	// 	}
	// }
	const handleChange = (e) => {
		setCertification({
			certification:  e.target.value,
		})
	}
	const handleAdd = (e) => {
		e.preventDefault();
		setDiplomas([...diplomas, certification]);
		setCertification({
			certification: '',
		});
	}

	return (
		<div className="userEducation">
			<div className="title">Education</div>
			<ul className="educations">
				{
					diplomas.map((certification) => {
						return <li key={uuid4()}>{certification.diploma}</li>
					})

				}
			</ul>
			{
				(diplomas.length < 4) ? (
					<div className="user-education-dic" id="listOfEducations">
						<input type="text" name="education" placeholder="Add your Educations here"
							onChange={handleChange}
							value={certification.diploma}
						/>
						<button className="btn-add"
							onClick={handleAdd}
						>Add</button>
					</div>
				) : (
					inputAddDocument.style.display = ''
				)
			}

		</div>
	);
}

export default Education;
