import './employees-add-form.css'
const EmployeesAddForm = () => {
	return (
		<div className="app-add-form">
			<h3>Додати нового працівника</h3>
			<form className="add-form d-flex">
				<input
					type="text"
					className="form-control new-post-label"
					placeholder="Імʼя?"
				/>
				<input
					type="number"
					className="form-control new-post-label"
					placeholder="ЗП в $?"
					step="50"
				/>
				<button type="submit" className="btn btn-outline-light">
					Додати
				</button>
			</form>
		</div>
	)
}
export default EmployeesAddForm
