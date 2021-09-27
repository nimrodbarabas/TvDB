import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSearchItemComponent } from './nav-search-item.component';

describe('NavSearchItemComponent', () => {
  let component: NavSearchItemComponent;
  let fixture: ComponentFixture<NavSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSearchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
