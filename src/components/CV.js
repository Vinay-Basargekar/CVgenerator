import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from "react";


const CV = ({ name, email, phone, education, degree, company, position }) => {
    const pdfRef = useRef();
    const downloadPDF = () => {
			const input = pdfRef.current;
			html2canvas(input).then((canvas) => {
				const imgData = canvas.toDataURL("image/png");
				const pdf = new jsPDF("p", "mm", "a4", true);
				const pdfWidth = pdf.internal.pageSize.getWidth();
				const pdfHeight = pdf.internal.pageSize.getHeight();
				const imgWidth = canvas.width;
				const imgHeight = canvas.height;
				const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
				const imgX = (pdfWidth - imgWidth * ratio) / 2;
				const imgY = 30;
				pdf.addImage(
					imgData,
					"PNG",
					imgX,
					imgY,
					imgWidth * ratio,
					imgHeight * ratio
				);
				pdf.save("invoice.pdf");
			});
		};


	return (
		<>
			<div class="cv-container" ref={pdfRef}>
				<div class="section">
					<h1>{name}</h1>
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
			<button onClick={downloadPDF}>Download pdf</button>
		</>
	);
};

export default CV;
