import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Role } from 'src/app/model/role';
import { Node } from 'src/app/model/ngx-graph-models/node';
import { Link } from 'src/app/model/ngx-graph-models/link';
import { AppUtils } from 'src/app/utils/app-utils';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

export interface DialogData {
  childNode: number;
  rolesMap: Map<number, number[]>;
  rolesList: Array<Role>; // any object with id, code, desc properties
}

@Component({
  selector: 'app-ngx-graph-dialog',
  templateUrl: './ngx-graph-dialog.component.html',
  styleUrls: ['./ngx-graph-dialog.component.scss']
})
export class NgxGraphDialogComponent implements OnInit {
  // inputs to inject into ngx-tool component
  nodes: Array<Node>;
  links: Array<Link>;
  selectedNodeId: string;

  // all nodes
  allNodes: Map<number, Node>;
  addedNode: Map<number, boolean>;

  constructor(
    public dialogRef: MatDialogRef<NgxGraphDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    console.log('the rolesMap sent: ', this.data.rolesMap);
    console.log('the childNode sent: ', this.data.childNode);
    console.log('the rolesList sent: ', this.data.rolesList);
    this.createAllNodes();
    this.createLinks(null);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // translates the roles into nodes for the graph
  createAllNodes(){
    this.addedNode = new Map<number, boolean>();
    this.allNodes = new Map<number, Node>();
    this.links = new Array<Link>();
    this.selectedNodeId = String(this.data.childNode);
    //main node
    if (this.data.rolesList != null && this.data.rolesList.length > 0){
      this.nodes = new Array<Node>();
      this.data.rolesList.forEach(rol => {
        const node = new Node(String(rol.id), rol.code, rol.desc);
        this.allNodes.set(rol.id, node);
        // means it has not been added to this.nodes list yet
        this.addedNode.set(rol.id, false);
      });
    }
    //we push the main node
    this.nodes.push(this.allNodes.get(this.data.childNode));
    this.addedNode.set(this.data.childNode, true);
    
  }
  // translates the rol relations (childrens) into links
  createLinks(childNode: number){
    let rolList;
    if (childNode == null){
      rolList = this.data.rolesMap.get(this.data.childNode);
      if (rolList != null && rolList !== undefined && rolList.length > 0){
        rolList.forEach(rol => {
          const node = this.allNodes.get(rol);
          this.nodes.push(node);
          const link = new Link(AppUtils.makeid(6), String(this.data.childNode), String(rol));
          link.label = 'is child of';
          this.links.push(link);
          this.addedNode.set(rol, true);
          this.createLinks(rol);
        });
    }
    }else{
      rolList = this.data.rolesMap.get(childNode);
      if (rolList != null && rolList !== undefined && rolList.length > 0){
        rolList.forEach(rol => {
          const node = this.allNodes.get(rol);
          this.nodes.push(node);
          if (!this.addedNode.get(rol)){
            const link = new Link(AppUtils.makeid(6), String(childNode), String(rol));
            link.label = 'is child of';
            this.links.push(link);
            this.addedNode.set(rol, true);
          }
          this.createLinks(rol);
        });
      }
    }
  }
}
