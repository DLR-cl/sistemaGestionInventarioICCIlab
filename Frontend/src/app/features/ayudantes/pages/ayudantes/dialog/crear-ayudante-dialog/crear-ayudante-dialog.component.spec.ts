import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAyudanteDialogComponent } from './crear-ayudante-dialog.component';

describe('CrearAyudanteDialogComponent', () => {
  let component: CrearAyudanteDialogComponent;
  let fixture: ComponentFixture<CrearAyudanteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearAyudanteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAyudanteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
