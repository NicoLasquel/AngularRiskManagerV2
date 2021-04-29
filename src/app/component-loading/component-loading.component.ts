import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-component-loading',
  templateUrl: './component-loading.component.html',
  styleUrls: ['./component-loading.component.css']
})
export class ComponentLoadingComponent implements OnInit {

  @Input() loading: boolean = false;
  @Input() httploading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChange){
    //console.log("LoadingAnimation Component: Success")
    //console.log(changes);
  }

}
