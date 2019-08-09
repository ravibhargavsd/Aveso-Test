import { Component, OnInit } from '@angular/core';
declare var require: any;
const data = require('../assets/data.json');
import { classHeader, classObj, studentHeader } from './classInfo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test';
  tableHeader:classObj[] = classHeader;
  classDetails: classBody[] = [];

  stTableHeader: classObj[] = studentHeader;
  stTableBody: studentBody[] = [];
  selCls: classBody;

  constructor() {}

  ngOnInit() {
  	let finalData:classBody[] = [];
  	for (let key in data) {
  		let temp: classBody = {
  			className: key,
  			total: data[key].length
  		};
  		temp['pass'] = (data[key].filter(ele => ele.Status == 'pass')).length;
  		temp['fail'] = temp['total'] - temp['pass'];
  		finalData.push(temp);
  	}
  	this.classDetails = finalData;
  }

  getClassInfo(item: classBody) {
  	this.stTableBody = [];
  	this.selCls = item;
  	let selClsData = data[item.className],
  			finalData:studentBody[] = [];

  	for (let dt of selClsData) {
  		let count: any = 0;
  		Object.values(dt).filter(ele => {
  			count = typeof(ele) == "string" ? count : (count + ele);
  			return count;
  		});
  		finalData.push({
  			...dt,
  			"Total": count
  		});
  	}
  	this.stTableBody = finalData;
  }
}

export interface classBody {
	className: string,
	total: number,
	pass?: number,
	fail?: number
}

export interface studentBody {
	Name: string,
	Maths: number,
	Science: number,
	English: number,
	Geography: number,
	History: number,
	Total: number,
	Status: string
}