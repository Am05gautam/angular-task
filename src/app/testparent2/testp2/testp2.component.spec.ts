import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testp2Component } from './testp2.component';

describe('Testp2Component', () => {
  let component: Testp2Component;
  let fixture: ComponentFixture<Testp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
