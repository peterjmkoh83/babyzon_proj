import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrollersComponent } from './strollers.component';

describe('StrollersComponent', () => {
  let component: StrollersComponent;
  let fixture: ComponentFixture<StrollersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrollersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrollersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
