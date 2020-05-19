import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGraphToolComponent } from './ngx-graph-tool.component';

describe('NgxGraphToolComponent', () => {
  let component: NgxGraphToolComponent;
  let fixture: ComponentFixture<NgxGraphToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGraphToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGraphToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
