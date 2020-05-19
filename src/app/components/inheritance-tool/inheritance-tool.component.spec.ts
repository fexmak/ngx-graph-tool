import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceToolComponent } from './inheritance-tool.component';

describe('InheritanceToolComponent', () => {
  let component: InheritanceToolComponent;
  let fixture: ComponentFixture<InheritanceToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InheritanceToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InheritanceToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
