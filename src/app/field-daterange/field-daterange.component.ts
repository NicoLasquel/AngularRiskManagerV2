import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-field-daterange',
  templateUrl: './field-daterange.component.html',
  styleUrls: ['./field-daterange.component.css']
})
export class FieldDaterangeComponent implements OnInit  {

  @Input() isEditable: boolean;
  @Input() title: string;
  @Input() startDate:string;
  @Input() endDate:string;
  @Output() startDateChange: EventEmitter<string> = new EventEmitter();
  @Output() endDateChange: EventEmitter<string> = new EventEmitter();

  date= new FormControl(new Date());
  serializedDate= new FormControl((new Date()).toISOString());

  startingDate= new FormControl();
  endingDate= new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.startingDate= new FormControl({value: new Date(this.startDate), disabled:true});
    this.endingDate= new FormControl({value: new Date(this.endDate), disabled:true});
    //this.endingDate= new FormControl(new Date(this.endDate));
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
    console.log(dateRangeStart.value)
    console.log(dateRangeEnd.value)

    this.startDateChange.emit(dateRangeStart.value)
    this.endDateChange.emit(dateRangeEnd.value)
  }
}

