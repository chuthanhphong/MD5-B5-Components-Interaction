import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatttingComponent } from './rattting.component';

describe('RatttingComponent', () => {
  let component: RatttingComponent;
  let fixture: ComponentFixture<RatttingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatttingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatttingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
