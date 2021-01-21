import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewslettersComponent } from './admin-newsletters.component';

describe('AdminNewslettersComponent', () => {
  let component: AdminNewslettersComponent;
  let fixture: ComponentFixture<AdminNewslettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewslettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
