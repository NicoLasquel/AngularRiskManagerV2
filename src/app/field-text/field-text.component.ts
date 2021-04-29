import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.css']
})
export class FieldTextComponent implements OnInit {
  myControl = new FormControl();
  
  @Input() isEditable: boolean;
  @Input() title: string;
  @Input() myString: string;
  @Output() myStringChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.myControl= new FormControl({value: this.myString, disabled:true});
  }

  entryEdit(newEntry: string){
    this.myStringChange.emit(newEntry)
  }


}
