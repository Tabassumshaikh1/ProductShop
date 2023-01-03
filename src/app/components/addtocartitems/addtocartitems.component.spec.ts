import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocartitemsComponent } from './addtocartitems.component';

describe('AddtocartitemsComponent', () => {
  let component: AddtocartitemsComponent;
  let fixture: ComponentFixture<AddtocartitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtocartitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtocartitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
