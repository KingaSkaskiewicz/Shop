import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizacjaComponent } from './realizacja.component';

describe('RealizacjaComponent', () => {
  let component: RealizacjaComponent;
  let fixture: ComponentFixture<RealizacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizacjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
