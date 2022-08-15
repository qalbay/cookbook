import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAndNavigationComponent } from './route-and-navigation.component';

describe('RouteAndNavigationComponent', () => {
  let component: RouteAndNavigationComponent;
  let fixture: ComponentFixture<RouteAndNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteAndNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteAndNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
