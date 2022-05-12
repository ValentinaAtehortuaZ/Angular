import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfHotelComponent } from './inf-hotel.component';

describe('InfHotelComponent', () => {
  let component: InfHotelComponent;
  let fixture: ComponentFixture<InfHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
