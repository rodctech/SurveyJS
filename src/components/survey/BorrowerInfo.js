import React, { useState } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { jsonPages3 } from "../questions/BorrowerInformationFormQuestions";

const BorrowerInfo = () => {
	const [borrowerData, setBorrowerData] = useState("");

	const completeSurvey = (surveyData) => {
		let surveyString = JSON.stringify(surveyData);
		console.log("🚀 ~ completeSurvey ~ surveyString", surveyString);
		setBorrowerData(surveyString);
		displayRes(surveyData);
	};

	const displayRes = (res) => {
		console.table("Survey Results", res);
		for (const [key, value] of Object.entries(res)) {
			res += `${key}: ${value}\n`;
		}
		alert("Following data from survey can then be used:\n\n" + res);
	};

	return (
		<Survey.Survey
			json={jsonPages3}
			showCompletedPage={false}
			onComplete={(data) => {
				//setBorrowerData(data.valuesHash);
				completeSurvey(data.valuesHash);
			}}
		/>
	);
};

export default BorrowerInfo;
