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

  sortData(obj) {
    let key = obj.label, _sort = obj.sorting;
    this.tableHeader = this.tableHeader.map(ele => {
      ele.sorting = 'asc'; 
      return ele;
    });
    obj.sorting = _sort === 'asc' ? 'desc' : 'asc';
    this.tableBody.sort((a, b) => {
      const x = typeof(a[key]) === 'string' ? a[key].toLowerCase() : a[key],
            y = typeof(b[key]) === 'string' ? b[key].toLowerCase() : b[key];
      if (x < y) {return _sort === 'asc' ? -1 : 1;}
      if (x > y) {return _sort === 'asc' ? 1 : -1;}
      return 0;
    });
  }

}
