import React, { Component } from "react";
import uuid4 from "uuid4";

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			certification: { diploma: '' },
			diplomas: [],
		}
	}
	handleChange = (e) => {
		this.setState({
			certification: {
				diploma: e.target.value,
			}
		})
	}
	handleAdd = (e) => {
		e.preventDefault();
		this.setState({
			diplomas: this.state.diplomas.concat(this.state.certification),
			certification: { diploma: '' }
		})
	}
	render() {
		const { certification, diplomas } = this.state;
		const inputAddDocument = document.getElementById('listOfEducations')
		return (
			<div className="userExperience">
				<div className="title">Experience</div>
				<ul className="experience">
					{
						diplomas.map((certification) => {
							return <li key={uuid4()}>{certification.diploma}</li>
						})

					}
				</ul>
				{
					(diplomas.length < 4) ? (
						<div className="user-experience-dic" id="listOfEducations">
							<input type="text" name="education" placeholder="Add your Educations here"
								onChange={this.handleChange}
								value={certification.diploma}
							/>
							<button className="btn-add"
								onClick={this.handleAdd}
							>Add</button>
						</div>
					) : (
						inputAddDocument.style.display = ''
					)
				}

			</div>
		);
	}
}

export default Experience;
