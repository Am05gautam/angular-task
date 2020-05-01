import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcurrComponent } from './testcurr.component';

describe('TestcurrComponent', () => {
  let component: TestcurrComponent;
  let fixture: ComponentFixture<TestcurrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcurrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
