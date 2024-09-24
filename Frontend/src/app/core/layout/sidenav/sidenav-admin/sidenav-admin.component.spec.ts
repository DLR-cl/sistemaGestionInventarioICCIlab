import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAdminComponent } from './sidenav-admin.component';

describe('SidenavAyudantesComponent', () => {
  let component: SidenavAdminComponent;
  let fixture: ComponentFixture<SidenavAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
