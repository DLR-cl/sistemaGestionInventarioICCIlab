import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimarDevolucionDialogComponent } from './confimar-devolucion-dialog.component';

describe('ConfimarDevolucionDialogComponent', () => {
  let component: ConfimarDevolucionDialogComponent;
  let fixture: ComponentFixture<ConfimarDevolucionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfimarDevolucionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfimarDevolucionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
