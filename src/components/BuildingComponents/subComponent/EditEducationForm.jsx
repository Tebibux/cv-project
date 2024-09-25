import ItemAddForm from "./ItemAddForm";

const EditEducationForm = (
	{ editingEducation,
		setIsEdit
	}) => {

	return (
		<div className="edit-education-form">
			<ItemAddForm editingEducation={editingEducation} setIsEdit={setIsEdit} btnType={Save} />
		</div>
	);
};

export default EditEducationForm;