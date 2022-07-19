import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookCardComponent } from './facebook-card.component';

describe('FacebookCardComponent', () => {
  let component: FacebookCardComponent;
  let fixture: ComponentFixture<FacebookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
