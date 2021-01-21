import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WysylkaComponent } from './wysylka.component';

describe('WysylkaComponent', () => {
  let component: WysylkaComponent;
  let fixture: ComponentFixture<WysylkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WysylkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WysylkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
