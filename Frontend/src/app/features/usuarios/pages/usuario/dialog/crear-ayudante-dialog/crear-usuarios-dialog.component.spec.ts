import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuariosDialogComponent } from './crear-usuarios-dialog.component';

describe('CrearAyudanteDialogComponent', () => {
  let component: CrearUsuariosDialogComponent;
  let fixture: ComponentFixture<CrearUsuariosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearUsuariosDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUsuariosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
