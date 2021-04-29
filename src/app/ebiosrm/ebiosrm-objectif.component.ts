import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebiosrm-objectif',
  templateUrl: './ebiosrm-objectif.component.html',
  styleUrls: ['./ebiosrm-objectif.component.css']
})
export class EbiosrmObjectifComponent implements OnInit {

  @Input() Atelier:number;

  constructor() { }

  ngOnInit(): void {
  }

}
