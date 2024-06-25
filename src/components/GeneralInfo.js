import { useState } from "react";

const GeneralInfo = ({ name, email, phone, setname, setemail, setphone }) => {
	const [tempName, setTempName] = useState(name);
	const [tempEmail, setTempEmail] = useState(email);
	const [tempPhone, setTempPhone] = useState(phone);

	function handleSubmit(e) {
		e.preventDefault();
		setname(tempName);
		setemail(tempEmail);
		setphone(tempPhone);
	}

	return (
		<div className="general-info">
			<h1>General Information</h1>
			<form onSubmit={handleSubmit}>
				<div className="info">
					<input
						placeholder="Name"
						value={tempName}
						onChange={(e) => setTempName(e.target.value)}
					/>
					<input
						placeholder="Email"
						value={tempEmail}
						onChange={(e) => setTempEmail(e.target.value)}
					/>
					<input
						placeholder="Phone no."
						value={tempPhone}
						onChange={(e) => setTempPhone(e.target.value)}
					/>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default GeneralInfo;
