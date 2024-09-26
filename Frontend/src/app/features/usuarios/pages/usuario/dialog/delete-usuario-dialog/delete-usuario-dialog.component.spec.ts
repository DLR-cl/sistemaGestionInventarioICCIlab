import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUsuarioDialogComponent } from './delete-usuario-dialog.component';

describe('DeleteUsuarioDialogComponent', () => {
  let component: DeleteUsuarioDialogComponent;
  let fixture: ComponentFixture<DeleteUsuarioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUsuarioDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUsuarioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
