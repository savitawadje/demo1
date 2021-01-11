import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprodComponent } from './homeprod.component';

describe('HomeprodComponent', () => {
  let component: HomeprodComponent;
  let fixture: ComponentFixture<HomeprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
