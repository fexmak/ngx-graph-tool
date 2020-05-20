import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGraphDialogComponent } from './ngx-graph-dialog.component';

describe('NgxGraphDialogComponent', () => {
  let component: NgxGraphDialogComponent;
  let fixture: ComponentFixture<NgxGraphDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGraphDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGraphDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
