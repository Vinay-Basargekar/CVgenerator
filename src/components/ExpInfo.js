import { useState } from "react";

const ExpInfo = ({ company, setCompany, position, setPosition }) => {
	const [tempCompany, setTempCompany] = useState(company);
	const [tempPosition, setTempPosition] = useState(position);

	function handleSubmit(e) {
		e.preventDefault();
		setCompany(tempCompany);
		setPosition(tempPosition);
	}

	return (
		<div className="exp-info">
			<h1>Experience</h1>
			<form onSubmit={handleSubmit}>
				<div className="experience">
					<input
						placeholder="Company Name"
						type="text"
						value={tempCompany}
						onChange={(e) => setTempCompany(e.target.value)}
					/>
					<input
						placeholder="Position"
						type="text"
						value={tempPosition}
						onChange={(e) => setTempPosition(e.target.value)}
					/>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default ExpInfo;
