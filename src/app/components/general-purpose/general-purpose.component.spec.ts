import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPurposeComponent } from './general-purpose.component';

describe('GeneralPurposeComponent', () => {
  let component: GeneralPurposeComponent;
  let fixture: ComponentFixture<GeneralPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
