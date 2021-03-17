export const jsonPages3 = {
	title: "BORROWER INFORMATION FORM",
	pages: [
		{
			name: "page1",
			elements: [
				{
					type: "panel",
					elements: [
						{
							type: "html",
							name: "income_intro",
							html:
								"<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>        To be completed by the following:            </h1>    <div class='intro__body wysiwyg'>       <p>(With the exception of guarantors, all parties listed below are considered “Associates” of the small business applicant.).</p>        <ul>        	<li> For a sole proprietorship, the sole proprietor;  	</li>        	<li>    For a partnership, all general partners and all limited partners owning 20% or more of the equity of the firm;   	</li>        	<li>    For a corporation, all owners of 20% or more of the corporation and each officer and director;  	</li>  <li> For limited liability companies (LLCs), all members owning 20% or more of the company, each officer, director, and managing member;  </li>  <li> Any person hired by the business to manage day-to-day operations; and </li> <li> Any other person who is guaranteeing the loan, if required by SBA. </li>   </ul>   <p> For clarification regarding any of the questions, you should contact the SBA Participating Lender that will be processing the loan request  </p>        </div> </article>",
						},
					],
					name: "panel1",
				},
			],
		},
		{
			name: "page2",
			elements: [
				{
					type: "text",
					name: "bussinesName",
					title: 'NAME OF BUSINESS APPLYING FOR LOAN("APPLICANT"):',
					titleLocation: "top",
					isRequired: true,
				},
				{
					type: "text",
					name: "yourName",
					title: "YOUR NAME:",
					titleLocation: "left",
					isRequired: true,
				},
				{
					type: "text",
					name: "title",
					title: "TITLE:",
					titleLocation: "left",
					isRequired: true,
				},
				{
					type: "text",
					name: "ssn",
					minWidth: "300",
					maxWidth: "350",
					title: "SOCIAL SECURITY NUMBER:",
					titleLocation: "left",
					hideNumber: true,
					isRequired: true,
					validators: [
						{
							type: "numeric",
						},
					],
					inputType: "password",
					maxLength: 9,
				},
				{
					type: "text",
					name: "dob",
					minWidth: "",
					maxWidth: "",
					title: "DATE OF BIRTH:",
					titleLocation: "left",
					isRequired: true,
					inputType: "date",
					autoComplete: "bday",
				},
				{
					type: "text",
					name: "placeOfBirth",
					title: "PLACE OF BIRTH:",
					titleLocation: "left",
					description: "(City & State or Foreign Country)",
					isRequired: true,
				},
			],
		},
		{
			name: "page3",
			elements: [
				{
					type: "matrixdynamic",
					name: "Owners",
					title:
						"List proprietors, partners, officers,\ndirectors, all holders of outstanding stock.\n100% of ownership must be shown. Use\nseparate sheet if necessary. Please\nreference the above codes to complete this\ntable for each owner of the applicant\nbusiness. More than one race may be\nselected.\n",
					titleLocation: "top",
					description:
						"** The gender/race/ethnicity/veteran data is collected for program reporting purposes only. Disclosure is voluntary and\nhas no bearing on the credit decision.",
					descriptionLocation: "underTitle",
					isRequired: true,
					columns: [
						{
							name: "Owner",
							cellType: "text",
							isRequired: true,
							width: "200",
						},
						{
							name: "% Owned",
							isRequired: true,
							width: "100",
						},
						{
							name: "Veteran",
							cellType: "dropdown",
							choices: [
								{
									value: "1",
									text: "Non-Veteran",
								},
								{
									value: "2",
									text: "Veteran-Other ",
								},
								{
									value: "3",
									text: "Service-Disabled Veteran",
								},
								{
									value: "4",
									text: " Not Disclosed ",
								},
							],
						},
						{
							name: "Gender",
							cellType: "dropdown",
							choices: [
								{
									value: "M",
									text: "Male",
								},
								{
									value: "F",
									text: "Female",
								},
								{
									value: "N",
									text: "Not Disclosed",
								},
							],
						},
						{
							name: "Race",
							cellType: "dropdown",
							choices: [
								{
									value: "1",
									text: "American Indian or Alaska Native",
								},
								{
									value: "2",
									text: "Asian",
								},
								{
									value: "3",
									text: "Black or African-American",
								},
								{
									value: "4",
									text: "Native Hawaiian of Pacific Islander",
								},
								{
									value: "5",
									text: "White",
								},
								{
									value: "X",
									text: "Not Disclosed",
								},
							],
						},
						{
							name: "Ethnicity",
							cellType: "dropdown",
							choices: [
								{
									value: "H",
									text: "Hispanic or Latino",
								},
								{
									value: "N",
									text: "Not Hispanic or Latino",
								},
								{
									value: "Y",
									text: "Not Disclosed",
								},
							],
						},
					],
					choices: [1, 2, 3, 4, 5],
					rowCount: 1,
					cellType: "text",
					maxRowCount: 100,
					confirmDelete: true,
					confirmDeleteText: "Delete Owner?",
					addRowLocation: "bottom",
					addRowText: "Add Owner",
				},
			],
		},
	],
	showQuestionNumbers: "off",
	questionTitleLocation: "left",
	showProgressBar: "bottom",
	questionStartIndex: "1",
};
