import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-field-autocomplete',
  templateUrl: './field-autocomplete.component.html',
  styleUrls: ['./field-autocomplete.component.css']
})
export class FieldAutocompleteComponent implements OnInit {
  myControl = new FormControl();
  //options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  @Input() isEditable: boolean;
  @Input() title: string;
  @Input() options: string[];
  @Input() Entry: string;
  @Output() EntryChange: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.myControl= new FormControl({value: this.Entry, disabled:true});
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  entryEdit(newEntry: string){
    this.EntryChange.emit(newEntry)
    //console.log(newEntry);
  }
}
