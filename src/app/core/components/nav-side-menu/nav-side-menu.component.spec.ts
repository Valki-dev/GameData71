import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSideMenuComponent } from './nav-side-menu.component';

describe('NavSideMenuComponent', () => {
  let component: NavSideMenuComponent;
  let fixture: ComponentFixture<NavSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavSideMenuComponent]
    });
    fixture = TestBed.createComponent(NavSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
