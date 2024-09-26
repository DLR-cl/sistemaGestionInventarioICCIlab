import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecursoDialogComponent } from './delete-recurso-dialog.component';

describe('DeleteRecursoDialogComponent', () => {
  let component: DeleteRecursoDialogComponent;
  let fixture: ComponentFixture<DeleteRecursoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteRecursoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRecursoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
