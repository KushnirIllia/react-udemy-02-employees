import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import EmployeesList from '../employees-list/employees-list'
import SearchPanel from '../search-panel/search-panel'
import './app.css'

function App() {
	const data = [
		{ name: 'John', salary: 1000, increase: false, id: 1 },
		{ name: 'Illia', salary: 2000, increase: true, id: 2 },
		{ name: 'Ivan', salary: 200, increase: true, id: 3 },
		{ name: 'Melani', salary: 900, increase: false, id: 4 },
	]
	return (
		<div className="app">
			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeesList data={data} />
			<EmployeesAddForm />
		</div>
	)
}
export default App
