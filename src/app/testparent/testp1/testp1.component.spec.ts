import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testp1Component } from './testp1.component';

describe('Testp1Component', () => {
  let component: Testp1Component;
  let fixture: ComponentFixture<Testp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
