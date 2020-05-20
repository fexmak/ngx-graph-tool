import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  childNode: number;
  nodesMap: Map<number, number[]>;

}

@Component({
  selector: 'app-ngx-graph-dialog',
  templateUrl: './ngx-graph-dialog.component.html',
  styleUrls: ['./ngx-graph-dialog.component.scss']
})
export class NgxGraphDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NgxGraphDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
