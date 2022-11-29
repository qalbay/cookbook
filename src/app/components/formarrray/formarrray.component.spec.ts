import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrrayComponent } from './formarrray.component';

describe('FormarrrayComponent', () => {
  let component: FormarrrayComponent;
  let fixture: ComponentFixture<FormarrrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormarrrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormarrrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
