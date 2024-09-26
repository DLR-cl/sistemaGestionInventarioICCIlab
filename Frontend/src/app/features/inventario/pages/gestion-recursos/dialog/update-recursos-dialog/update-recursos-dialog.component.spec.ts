import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecursosDialogComponent } from './update-recursos-dialog.component';

describe('UpdateRecursosDialogComponent', () => {
  let component: UpdateRecursosDialogComponent;
  let fixture: ComponentFixture<UpdateRecursosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRecursosDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRecursosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
