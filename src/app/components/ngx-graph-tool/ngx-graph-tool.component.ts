import { Component, OnInit, Input } from '@angular/core';
import { AppUtils } from 'src/app/utils/app-utils';
import { Link } from 'src/app/model/ngx-graph-models/link';
import { Node } from 'src/app/model/ngx-graph-models/node';

@Component({
  selector: 'app-ngx-graph-tool',
  templateUrl: './ngx-graph-tool.component.html',
  styleUrls: ['./ngx-graph-tool.component.scss']
})
export class NgxGraphToolComponent implements OnInit {

  constructor() { }


  layoutSettings = {
    orientation: 'TB'
  };

  @Input() links: Array<Link>;
  @Input() nodes: Array<Node>;
  @Input() selectedNodeId: string;


  ngOnInit(): void {

  }

}
