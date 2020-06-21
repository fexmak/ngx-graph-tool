import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxGraphDialogComponent } from '../dialogs/ngx-graph-dialog/ngx-graph-dialog.component';
import { Role } from 'src/app/model/role';

@Component({
  selector: 'app-general-purpose',
  templateUrl: './general-purpose.component.html',
  styleUrls: ['./general-purpose.component.scss']
})
export class GeneralPurposeComponent implements OnInit {

  exampleMap = new Map<number, number[]>();

  constructor(public dialog: MatDialog) { }

  childNode: number;
  rolesMap: Map<number, number[]>;
  rolesList = new Array<Role>();

  loadExampleMap(){
    let parentNodesList = [
      2, 3
    ];
    this.exampleMap.set(1, parentNodesList);
    parentNodesList = [
      3, 5
    ];
    this.exampleMap.set(2, parentNodesList);

    parentNodesList = [
      4
    ];
    this.exampleMap.set(3, parentNodesList);
    // i set the starting point, which will be the child node target
    this.childNode = 1;
    // i set the nodesMap (has all the mappings)
    this.rolesMap = this.exampleMap;

    // a node object example
    let rol = new Role ();
    rol.id = 1;
    rol.code = 'ROLE_ONE';
    rol.desc = 'Role one';
    this.rolesList.push(rol);

    rol = new Role ();
    rol.id = 2;
    rol.code = 'ROLE_TWO';
    rol.desc = 'Role two';
    this.rolesList.push(rol);

    rol = new Role ();
    rol.id = 3;
    rol.code = 'ROLE_THREE';
    rol.desc = 'Role three';
    this.rolesList.push(rol);

    rol = new Role ();
    rol.id = 4;
    rol.code = 'ROLE_FOUR';
    rol.desc = 'Role four';
    this.rolesList.push(rol);

    rol = new Role ();
    rol.id = 5;
    rol.code = 'ROLE_FIVE';
    rol.desc = 'Role five';
    this.rolesList.push(rol);

  }

  ngOnInit(): void {
    this.loadExampleMap();

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NgxGraphDialogComponent, {
      width: '750px',
      data: {
        childNode: this.childNode,
        rolesMap: this.rolesMap,
        rolesList: this.rolesList
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
