import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-graph-tool-example',
  templateUrl: './ngx-graph-tool-example.component.html',
  styleUrls: ['./ngx-graph-tool-example.component.scss']
})
export class NgxGraphToolExampleComponent implements OnInit {

  constructor() { }

  layoutSettings = {
    orientation: 'TB'
  };

  ngOnInit(): void {
  }

}
