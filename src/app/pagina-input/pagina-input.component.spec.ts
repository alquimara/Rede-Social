import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInputComponent } from './pagina-input.component';

describe('PaginaInputComponent', () => {
  let component: PaginaInputComponent;
  let fixture: ComponentFixture<PaginaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
