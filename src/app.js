import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import CV from "./components/CV";
import EduInfo from "./components/EduInfo";
import ExpInfo from "./components/ExpInfo";

const Body = () => {
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [phone, setphone] = useState("");

	const [education, setEducation] = useState([]);
	const [degree, setDegree] = useState([]);

	const [company, setCompany] = useState([]);
	const [position, setPosition] = useState([]);

	return (
		<>
            <h1 className="heading">CV Generator</h1>
			<div className="wrapper">
				<div className="info-area">
					<GeneralInfo
						name={name}
						email={email}
						phone={phone}
						setemail={setemail}
						setname={setname}
						setphone={setphone}
					/>
					<EduInfo
						education={education}
						setEducation={setEducation}
						degree={degree}
						setDegree={setDegree}
					/>
					<ExpInfo
						company={company}
						setCompany={setCompany}
						position={position}
						setPosition={setPosition}
					/>
				</div>
				<div className="CV">
					<CV
						name={name}
						email={email}
						phone={phone}
						education={education}
						degree={degree}
						company={company}
						position={position}
					/>
				</div>
			</div>
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
