import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/model/link';

@Component({
  selector: 'app-ngx-graph-tool',
  templateUrl: './ngx-graph-tool.component.html',
  styleUrls: ['./ngx-graph-tool.component.scss']
})
export class NgxGraphToolComponent implements OnInit {

  constructor() { }

  linkIdCounter = 0;

  links = new Array<Link>();
  layoutSettings = {
    orientation: 'TB'
  };

  nodes = [
    {
      id: '1',
      label: 'ROLE_APC_MASTER',
      desc: 'Rol APC Master'
    }, {
      id: '2',
      label: 'ROLE_APC_READ',
      desc: 'Rol APC Read'
    }
  ];

  private createLink(source: string, target: string){
    const link: Link = new Link();
    link.label = 'is parent of';
    link.source = source;
    link.target = target;
    this.links.push(link);
    link.id = String(this.linkIdCounter);
    this.linkIdCounter++;
  }

  ngOnInit(): void {

    this.createLink('1', '2');

  }

}
