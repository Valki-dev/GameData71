import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogamesIndividualComponent } from './videogames-individual.component';

describe('VideogamesIndividualComponent', () => {
  let component: VideogamesIndividualComponent;
  let fixture: ComponentFixture<VideogamesIndividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideogamesIndividualComponent]
    });
    fixture = TestBed.createComponent(VideogamesIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
