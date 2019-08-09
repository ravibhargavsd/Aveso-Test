import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
	@Input() tableHeader;
	@Input() tableBody;
	@Output() objClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitObject(obj) {
  	this.objClicked.emit(obj);
  }

}
