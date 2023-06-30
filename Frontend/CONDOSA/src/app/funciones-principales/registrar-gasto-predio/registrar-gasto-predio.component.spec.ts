/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegistrarGastoPredioComponent } from './registrar-gasto-predio.component';

describe('RegistrarGastoPredioComponent', () => {
  let component: RegistrarGastoPredioComponent;
  let fixture: ComponentFixture<RegistrarGastoPredioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarGastoPredioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarGastoPredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
