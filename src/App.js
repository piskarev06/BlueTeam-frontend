import logo from './logo.svg'
import './App.css'

const WarningComponent = () => {
	return <div>WarningComponent</div>
}

function App() {
	let noUsed = 1
	let noUsed2 = 2

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
