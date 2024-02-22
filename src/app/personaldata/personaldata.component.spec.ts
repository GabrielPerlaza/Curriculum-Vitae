import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldataComponent } from './personaldata.component';

describe('PersonaldataComponent', () => {
  let component: PersonaldataComponent;
  let fixture: ComponentFixture<PersonaldataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaldataComponent]
    });
    fixture = TestBed.createComponent(PersonaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
