import { useState } from "react";

const EduInfo = ({ education, setEducation, degree, setDegree }) => {
	const [tempEducation, setTempEducation] = useState(education);
	const [tempDegree, setTempDegree] = useState(degree);

	function handleSubmit(e) {
		e.preventDefault();
		setEducation(tempEducation);
        setDegree(tempDegree);
	}

	return (
		<div className="edu-info">
			<h1>Education</h1>
			<form onSubmit={handleSubmit}>
				<div className="education">
					<input
						placeholder="School Name"
						type="text"
						value={tempEducation}
						onChange={(e) => setTempEducation(e.target.value)}
					/>
					<input
						placeholder="Degree"
						type="text"
						value={tempDegree}
						onChange={(e) => setTempDegree(e.target.value)}
					/>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default EduInfo;
