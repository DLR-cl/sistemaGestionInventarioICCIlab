import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecursoDialogComponent } from './crear-recurso-dialog.component';

describe('CrearRecursoDialogComponent', () => {
  let component: CrearRecursoDialogComponent;
  let fixture: ComponentFixture<CrearRecursoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearRecursoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRecursoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
