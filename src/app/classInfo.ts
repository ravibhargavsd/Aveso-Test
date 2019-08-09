export interface classObj {
	title: string,
	label: string,
	clickable?: boolean
}

export const classHeader: classObj[] = [{
	title: "Class",
	label: "className",
	clickable: true
}, {
	title: "Students",
	label: "total"
}, {
	title: "Pass",
	label: "pass"
}, {
	title: "Fail",
	label: "fail"
}];

export const studentHeader:classObj[] = [{
	"title":"Name",
	"label":"Name"
},{
	"title":"Maths",
	"label":"Maths"
},{
	"title":"Science",
	"label":"Science"
},{
	"title":"English",
	"label":"English"
},{
	"title":"Geography",
	"label":"Geography"
},{
	"title":"History",
	"label":"History"
},{
	"title":"Total",
	"label":"Total"
},{
	"title":"Status",
	"label":"Status"
}];