import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyimageComponent } from './bodyimage.component';

describe('BodyimageComponent', () => {
  let component: BodyimageComponent;
  let fixture: ComponentFixture<BodyimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
