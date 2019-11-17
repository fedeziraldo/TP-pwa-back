import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLoginComponent } from './lista-login.component';

describe('ListaLoginComponent', () => {
  let component: ListaLoginComponent;
  let fixture: ComponentFixture<ListaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
