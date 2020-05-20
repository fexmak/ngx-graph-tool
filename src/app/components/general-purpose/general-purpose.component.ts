import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxGraphDialogComponent } from '../dialogs/ngx-graph-dialog/ngx-graph-dialog.component';

@Component({
  selector: 'app-general-purpose',
  templateUrl: './general-purpose.component.html',
  styleUrls: ['./general-purpose.component.scss']
})
export class GeneralPurposeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  childNode: number;
  nodesMap: Map<number, number[]>;

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NgxGraphDialogComponent, {
      width: '250px',
      data: {childNode: this.childNode, nodesMap: this.nodesMap}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
