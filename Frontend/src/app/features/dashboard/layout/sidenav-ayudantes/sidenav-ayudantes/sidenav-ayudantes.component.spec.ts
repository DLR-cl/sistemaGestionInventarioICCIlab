import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAyudantesComponent } from './sidenav-ayudantes.component';

describe('SidenavAyudantesComponent', () => {
  let component: SidenavAyudantesComponent;
  let fixture: ComponentFixture<SidenavAyudantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavAyudantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavAyudantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
