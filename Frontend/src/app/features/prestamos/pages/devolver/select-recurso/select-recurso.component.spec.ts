import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecursoComponent } from './select-recurso.component';

describe('SelectRecursoComponent', () => {
  let component: SelectRecursoComponent;
  let fixture: ComponentFixture<SelectRecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectRecursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
