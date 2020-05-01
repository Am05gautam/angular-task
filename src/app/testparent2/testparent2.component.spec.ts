import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testparent2Component } from './testparent2.component';

describe('Testparent2Component', () => {
  let component: Testparent2Component;
  let fixture: ComponentFixture<Testparent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testparent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testparent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
