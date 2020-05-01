import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestparentComponent } from './testparent.component';

describe('TestparentComponent', () => {
  let component: TestparentComponent;
  let fixture: ComponentFixture<TestparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
