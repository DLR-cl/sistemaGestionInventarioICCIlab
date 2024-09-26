import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoriaDialogComponent } from './delete-categoria-dialog.component';

describe('DeleteCategoriaDialogComponent', () => {
  let component: DeleteCategoriaDialogComponent;
  let fixture: ComponentFixture<DeleteCategoriaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCategoriaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCategoriaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
