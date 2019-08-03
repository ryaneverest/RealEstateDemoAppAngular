import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSlidesComponent } from './image-slides.component';

describe('ImageSlidesComponent', () => {
  let component: ImageSlidesComponent;
  let fixture: ComponentFixture<ImageSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSlidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
