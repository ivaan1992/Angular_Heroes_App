import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Superhero } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: []
})
export class ConfirmComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Superhero) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  remove() {
    this.dialogRef.close(true);

  }

  cancel() {
    this.dialogRef.close();
  }

}
