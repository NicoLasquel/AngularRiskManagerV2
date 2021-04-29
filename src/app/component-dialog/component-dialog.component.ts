import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  message: string;
  button1: string;
  button2: string;
}

@Component({
  selector: 'app-component-dialog',
  templateUrl: './component-dialog.component.html',
  styleUrls: ['./component-dialog.component.css']
})
export class ComponentDialogComponent implements OnInit {

  dialogData: DialogData;

  constructor(
    public dialogRef:MatDialogRef<ComponentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onConfirm(): void{
    this.dialogRef.close(false);
  }

  onDismiss(): void{
    this.dialogRef.close(true);
  }
}
