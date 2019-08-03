import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableInputComponent } from './resuable-input.component';

describe('ResuableInputComponent', () => {
  let component: ResuableInputComponent;
  let fixture: ComponentFixture<ResuableInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResuableInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResuableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
