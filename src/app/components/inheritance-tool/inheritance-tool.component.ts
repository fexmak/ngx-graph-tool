import { Component, OnInit, Input } from '@angular/core';
import { Role } from 'src/app/model/role';

@Component({
  selector: 'app-inheritance-tool',
  templateUrl: './inheritance-tool.component.html',
  styleUrls: ['./inheritance-tool.component.scss'],
})
export class InheritanceToolComponent implements OnInit {

  nodeHeadingProperty = 'code';
  nodeContentProperty = 'description';

  @Input() availableRoles: Array<Role>;
  @Input() RoleParentsMap: Map<number, number[]>;

  data = {
    id: '1',
    name: 'Lao Lao',
    title: 'general manager',
    children: [
      { id: '2', name: 'Bo Miao', title: 'department manager' },
      {
        id: '3',
        name: 'Su Miao',
        title: 'department manager',
        children: [
          { id: '4', name: 'Tie Hua', title: 'senior engineer' },
          {
            id: '5',
            name: 'Hei Hei',
            title: 'senior engineer',
            children: [
              { id: '6', name: 'Dan Zai', title: 'engineer' },
              { id: '7', name: 'Dan Dan', title: 'engineer' },
              { id: '8', name: 'Xiang Xiang', title: 'engineer' },
              { id: '9', name: 'Ke Xin', title: 'engineer' },
              { id: '10', name: 'Xiao Dan', title: 'engineer' },
              { id: '11', name: 'Dan Dan Zai', title: 'engineer' }
            ]
          },
          { id: '12', name: 'Pang Pang', title: 'senior engineer' },
          { id: '13', name: 'Er Pang', title: 'senior engineer' },
          { id: '14', name: 'San Pang', title: 'senior engineer' },
          { id: '15', name: 'Si Pang', title: 'senior engineer' }
        ]
      },
      { id: '16', name: 'Hong Miao', title: 'department manager' },
      { id: '17', name: 'Chun Miao', title: 'department manager' },
      { id: '18', name: 'Yu Li', title: 'department manager' },
      { id: '19', name: 'Yu Jie', title: 'department manager' },
      { id: '20', name: 'Yu Wei', title: 'department manager' },
      { id: '21', name: 'Yu Tie', title: 'department manager' }
    ]
  };


 testData = {
    id: '1',
    name: 'ROLE_FATHER',
    title: 'Role Father',
    children: [
        {
          id: '2',
          name: 'ROLE_SON',
          title: 'Role Son',
          children: [
                { id: '3', name: 'ROLE_GRANDSON', title: 'Role Grandson' }
            ]
        },
        {
          id: '4',
          name: 'ROLE_DAUGHTER',
          title: 'Role Daughter',
          children: [
                {id: '5', name: 'ROLE_GRANDDAUGHTER', title: 'Role Granddaughter' },
                {
                  id: '6',
                  name: 'ROLE_GRANDDAUGHTER_TWO',
                  title: 'Role Granddaughter Two'
                }
            ]
        },
        {id: '7', name: 'ROLE_GAY_SON', title: 'Role Gay Son' }
    ]
};

selectNode(nodeData: {name: string, title: string}) {
  alert(`Hi All. I'm ${nodeData.name}. I'm a ${nodeData.title}.`);
}

  constructor() { }

  ngOnInit(): void {
  }

}
