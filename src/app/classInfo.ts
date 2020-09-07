export interface classObj {
	title: string,
	label: string,
	clickable?: boolean,
	sorting?: string
}

export const classHeader: classObj[] = [{
	title: "Class",
	label: "className",
	clickable: true,
	sorting: 'asc'
}, {
	title: "Students",
	label: "total",
	sorting: 'asc'
}, {
	title: "Pass",
	label: "pass",
	sorting: 'asc'
}, {
	title: "Fail",
	label: "fail",
	sorting: 'asc'
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