import { ComponentFixture, TestBed } from '@angular/core/testing';

import  AyudantesComponent  from './ayudantes.component';

describe('AyudantesComponent', () => {
  let component: AyudantesComponent;
  let fixture: ComponentFixture<AyudantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AyudantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyudantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
