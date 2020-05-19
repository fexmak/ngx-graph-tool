import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGraphToolExampleComponent } from './ngx-graph-tool-example.component';

describe('NgxGraphToolExampleComponent', () => {
  let component: NgxGraphToolExampleComponent;
  let fixture: ComponentFixture<NgxGraphToolExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGraphToolExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGraphToolExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
