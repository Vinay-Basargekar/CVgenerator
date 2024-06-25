
const CV = ({ name, email, phone, education, degree, company, position }) => {

	return (
		<div class="cv-container">
			<div class="section">
				<h1>
					{name}
				</h1>
				<ul class="about">
					<li>Email: {email}</li>
					<li>Phone: +{phone}</li>
				</ul>
			</div>
			<div class="section">
				<h2>Education</h2>
				<ul class="education">
					<li>
						{/* Bachelor of Information Technology, AISSMS Institute of Information
						Technology, Pune */}
						{education}
					</li>
					<li>
						{/* Army Public School, Dehuroad - 12th Boards */}
						{degree}
					</li>
				</ul>
			</div>
			<div class="section">
				<h2>Experience</h2>
				<ul class="experience">
					<li>Web Developer Intern at {company}</li>
					<li>Freelance JavaScript Developer</li>
					<li>{position}</li>
				</ul>
			</div>
			<div class="section">
				<h2>Skills</h2>
				<ul class="skills">
					<li>JavaScript</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>Python</li>
					<li>Java</li>
				</ul>
			</div>
		</div>
	);
};

export default CV;
