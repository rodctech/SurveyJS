import logo from "./logo.svg";
import "./App.css";
import BorrowerInfo from "./components/survey/BorrowerInfo";
import SurveyComponent from "./components/survey/sampleIncome";

function App() {
	return (
		<div className="Container">
			<div className="App">
				<BorrowerInfo />
			</div>
		</div>
	);
}

export default App;
