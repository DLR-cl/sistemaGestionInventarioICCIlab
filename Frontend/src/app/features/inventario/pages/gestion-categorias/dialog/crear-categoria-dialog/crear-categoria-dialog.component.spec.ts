import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCategoriaDialogComponent } from './crear-categoria-dialog.component';

describe('CrearCategoriaDialogComponent', () => {
  let component: CrearCategoriaDialogComponent;
  let fixture: ComponentFixture<CrearCategoriaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearCategoriaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCategoriaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
