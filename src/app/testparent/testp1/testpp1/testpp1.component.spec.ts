import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testpp1Component } from './testpp1.component';

describe('Testpp1Component', () => {
  let component: Testpp1Component;
  let fixture: ComponentFixture<Testpp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testpp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testpp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
