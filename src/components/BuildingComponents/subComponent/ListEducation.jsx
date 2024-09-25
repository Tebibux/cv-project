/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faEdit } from '@fortawesome/free-solid-svg-icons';

const ListEducation = ({ educations, handleEdit, isEdit }) => {
	return (
		<>
			{educations.length === 0 ? (
				<div className="no-list"> Nothing to show</div>
			) : (
				<>
					{educations
						.filter((education, index) => index !== 0)
						.map((education) => (
							<li key={education.docKey} className="item-lists">
								<h5>
									<FontAwesomeIcon icon={faChevronRight} /> &emsp;{' '}
									{education.filedOfEducation}
								</h5>
								<button
									className="edit"
									onClick={() => {
										handleEdit(education, isEdit);
									}}
								>
									<FontAwesomeIcon icon={faEdit} />
								</button>
								<hr />
							</li>
						))}
				</>
			)}
		</>
	);
};

export default ListEducation;